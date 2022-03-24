import ErrorIcon from '@mui/icons-material/Error';
import {
  Badge,
  Box,
  CircularProgress,
  Grid,
  Tooltip,
  Typography,
  alpha,
  darken,
  useTheme,
} from '@mui/material';
import { FC, useContext } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';

import Card from './Card';
import { ILane, KanbanBoardContext } from './KanbanBoardContext';

export interface ILaneProps extends ILane {}

const Lane: FC<ILaneProps> = ({
  id,
  title,
  showCardCount = false,
  loading = false,
  cards,
  errorMessage,
  sx,
  footer,
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
  } = useContext(KanbanBoardContext);

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
        ...sx,
      }}
    >
      <Box
        component="section"
        sx={{
          backgroundColor: darken(
            palette.background.default,
            palette.mode === 'dark' ? 0.9 : 0.1
          ),
          mr: 2,
          border: `1px solid ${alpha(palette.text.primary, 0.2)}`,
          borderRadius: 2,
          height: '100%',
          '& .smooth-dnd-container': {
            minHeight: `calc(100% - ${yPaddedHeight}px)`,
            px: 1,
            width: 360,
            flex: '1 1 0%',
            overflow: 'hidden auto',
            alignSelf: 'center',
            flexDirection: 'column',
            justifyContent: 'space-between',
            maxHeight: `calc(100% - ${yPaddedHeight}px)`,
          },
          '& .smooth-dnd-container>.smooth-dnd-draggable-wrapper, & .undraggable-wrapper':
            {
              mb: 1,
            },
          '& .smooth-dnd-ghost': {
            transform: `rotate(3deg)`,
          },
        }}
      >
        <Box component="header" className="column-drag-handle" sx={{ p: 1 }}>
          <Grid container spacing={1} alignItems="center">
            {showCardCount && cards.length > 0 ? (
              <Grid item>
                <Badge
                  badgeContent={cards.length}
                  color="primary"
                  max={99}
                  sx={{
                    '&>.MuiBadge-badge': {
                      position: 'relative',
                      transform: 'none',
                    },
                  }}
                />{' '}
              </Grid>
            ) : null}
            <Grid item xs>
              <Typography sx={{ fontWeight: 'bold', fontSize: 15 }}>
                {title}
              </Typography>
            </Grid>
            {(() => {
              if (errorMessage) {
                return (
                  <Grid item sx={{ display: 'flex' }}>
                    <Tooltip title={errorMessage}>
                      <ErrorIcon color="error" />
                    </Tooltip>
                  </Grid>
                );
              }
              if (loading) {
                return (
                  <Grid item>
                    <CircularProgress size={16} color="inherit" />
                  </Grid>
                );
              }
            })()}
          </Grid>
        </Box>
        <Container
          groupName="col"
          onDrop={({ addedIndex, removedIndex, payload }) => {
            onCardDrop && onCardDrop(id, { addedIndex, removedIndex, payload });
          }}
          getChildPayload={(index) => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          onDragEnd={({ isSource, payload }) => {
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
          onDragStart={({ isSource }) => {
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
              cardStyles.cursor = 'default';
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
              return <Box className="undraggable-wrapper">{card}</Box>;
            }
            return <Draggable key={cardId}>{card}</Draggable>;
          })}
        </Container>
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
