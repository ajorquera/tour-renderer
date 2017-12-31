import PannellumPano from './PannellumPano'
import {Table} from './Hashtable'

export default interface pannellumOpts {
  title?: string;
  autoLoad?: boolean;
  preview?: string;
  showControls?: boolean;
  hfov?:number;  
  scenes: Table<PannellumPano>;
  default?: {
    firstScene?: number;
    sceneFadeDuration?: number;
    yaw?: number;
    pitch?: number;
  }
}
