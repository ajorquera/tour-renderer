import {Table} from './Hashtable'
import PannellumLink from './PannellumLink'

export default interface PannellumPano {
  id: number;
  title: string;
  type: string;
  panorama: string;
  yaw: number;
  pitch: number;
  hotSpots?: any;
}
