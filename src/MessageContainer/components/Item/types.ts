import { MessageContainerProps, DaysPositions } from '../../types'
import { IMessage } from '../../../types'

export interface ItemProps<TMessage extends IMessage> extends MessageContainerProps<TMessage> {
  onRefDayWrapper: (ref: unknown, id: string | number, createdAt: number) => void
  currentMessage: IMessage
  previousMessage?: IMessage
  nextMessage?: IMessage
  position: 'left' | 'right'
  scrolledY: { value: number }
  daysPositions: { value: DaysPositions }
  listHeight: { value: number }
}
