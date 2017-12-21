import PannellumPano from './PannellumPano'
import {Table} from './Hashtable'

export default interface pannellumOpts {
  title: string;
  autoLoad?: boolean;
  preview?: string;
  showControls?: boolean;
  scenes: Table<PannellumPano>,
  default?: {
    firstScene?: number;
    sceneFadeDuration?: number;
    yaw?: number;
    pitch?: number;
  }
}
