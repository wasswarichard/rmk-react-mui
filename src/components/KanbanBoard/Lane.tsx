import ErrorIcon from '@mui/icons-material/Error';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import useTheme from '@mui/material/styles/useTheme';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { alpha, darken } from '@mui/system/colorManipulator';
import { FC } from 'react';
import {
  Container as BaseContainer,
  Draggable as BaseDraggable,
} from 'react-smooth-dnd';

import RenderIfVisible from '../RenderIfVisible';
import Card from './Card';
import { Lane as LaneType, useKanbanBoardContext } from './KanbanBoardContext';
import LaneTools from './LaneTools';

const Container = BaseContainer as any;
const Draggable = BaseDraggable as any;

export interface LaneProps extends LaneType {}

const Lane: FC<LaneProps> = ({
  id,
  title,
  showCardCount = false,
  loading = false,
  cards,
  errorMessage,
  sx,
  footer,
  tools,
  ...rest
}) => {
  const { palette } = useTheme();
  const {
    setToLaneId,
    onCardDrop,
    setFromLaneId,
    fromLaneId,
    toLaneId,
    onCardMoveAcrossLanes,
  } = useKanbanBoardContext();

  let yPaddedHeight = 40;
  footer && (yPaddedHeight += 40);

  return (
    <Box
      {...rest}
      sx={{
        height: '100%',
        display: 'inline-block',
        verticalAlign: 'top',
        whiteSpace: 'normal',
      }}
    >
      <Box
        component="section"
        sx={{
          bgcolor: darken(
            palette.background.default,
            palette.mode === 'dark' ? 0.9 : 0.1
          ),
          border: `1px solid ${alpha(palette.text.primary, 0.2)}`,
          borderRadius: 2,
          height: '100%',
          '& .smooth-dnd-container': {
            minHeight: `calc(100% - ${yPaddedHeight}px)`,
            maxHeight: `calc(100% - ${yPaddedHeight}px)`,
            px: 1,
            width: 360,
            flex: '1 1 0%',
            overflow: 'hidden auto',
            alignSelf: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
          },
          [`
            & .smooth-dnd-container>.smooth-dnd-draggable-wrapper,
            & .undraggable-wrapper
          `]: {
            mb: 1,
          },
          ...sx,
        }}
      >
        <Box component="header" className="column-drag-handle" sx={{ p: 1 }}>
          <Grid container spacing={1} alignItems="center">
            {showCardCount && cards.length > 0 ? (
              <Grid item display="flex">
                <Badge
                  badgeContent={cards.length}
                  color="primary"
                  max={999}
                  sx={{
                    '&>.MuiBadge-badge': {
                      position: 'relative',
                      transform: 'none',
                    },
                  }}
                />{' '}
              </Grid>
            ) : null}
            <Grid
              item
              xs
              sx={{ minWidth: 0, fontWeight: 'bold', fontSize: 15 }}
            >
              {(() => {
                if (typeof title === 'string') {
                  return (
                    <Tooltip title={title}>
                      <Typography
                        sx={{ fontWeight: 'bold', fontSize: 15 }}
                        noWrap
                      >
                        {title}
                      </Typography>
                    </Tooltip>
                  );
                }
                return <>{title}</>;
              })()}
            </Grid>
            {(() => {
              if (tools) {
                return (
                  <Grid item display="flex">
                    <LaneTools tools={tools} laneId={id} />
                  </Grid>
                );
              }
            })()}
            {(() => {
              if (errorMessage) {
                return (
                  <Grid item display="flex">
                    <Tooltip title={errorMessage} arrow>
                      <ErrorIcon color="error" />
                    </Tooltip>
                  </Grid>
                );
              }
              if (loading) {
                return (
                  <Grid item display="flex">
                    <CircularProgress size={16} color="inherit" />
                  </Grid>
                );
              }
            })()}
          </Grid>
        </Box>
        <RenderIfVisible
          stayRendered
          unWrapChildrenIfVisible
          sx={{
            minHeight: `calc(100% - ${yPaddedHeight}px)`,
            maxHeight: `calc(100% - ${yPaddedHeight}px)`,
            width: 360,
          }}
        >
          <Container
            groupName="col"
            onDrop={({ addedIndex, removedIndex, payload }: any) => {
              onCardDrop &&
                onCardDrop(id, { addedIndex, removedIndex, payload });
            }}
            getChildPayload={(index: any) => cards[index]}
            dragClass="card-ghost"
            dropClass="card-ghost-drop"
            onDragEnd={({ isSource, payload }: any) => {
              if (isSource) {
                onCardMoveAcrossLanes &&
                  fromLaneId != null &&
                  toLaneId != null &&
                  onCardMoveAcrossLanes(fromLaneId, toLaneId, payload.id);
              }
            }}
            onDragEnter={() => {
              setToLaneId && setToLaneId(id);
            }}
            onDragStart={({ isSource }: any) => {
              if (isSource && setFromLaneId) {
                setFromLaneId(id);
              }
            }}
            dropPlaceholder={{
              animationDuration: 150,
              showOnTop: true,
              className: 'drop-preview',
            }}
            animationDuration={200}
          >
            {cards.map(({ id: cardId, draggable = true, sx, ...rest }) => {
              const cardStyles: any = {};
              if (!draggable) {
                cardStyles.bgcolor = alpha(palette.background.paper, 0.6);
                cardStyles.userSelect = 'none';
              }
              const card = (
                <Card
                  {...{ id: cardId, ...rest }}
                  sx={{
                    ...cardStyles,
                    ...sx,
                  }}
                  laneId={id}
                />
              );
              if (!draggable) {
                return (
                  <Box key={cardId} className="undraggable-wrapper">
                    {card}
                  </Box>
                );
              }
              return <Draggable key={cardId}>{card}</Draggable>;
            })}
          </Container>
        </RenderIfVisible>
        {footer && (
          <Box
            component="footer"
            className="column-drag-handle"
            sx={{
              borderTop: `1px solid ${alpha(palette.text.primary, 0.2)}`,
              height: 40,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {footer}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Lane;
