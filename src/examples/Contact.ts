import { Context } from "../Context";

// The following typedefs would come from http://www.github.com/fdc3/typedefs ...
// which itself would be a form of http://www.github.com/finos/typedefs
// (Or they simply are imported right from www.github.com/finos/typedefs)
import {FINOS} from '../../../../finos-fo/fo-financial-objects/typedefs/ts/FINOSContactTypeDef';

export interface Contact extends Context, FINOS.FINOSContactTypeDef {
  type: 'fdc3.contact';
  //addl field that FDC3 wants
  //how can we extend contact object def itself
  org: string
}
