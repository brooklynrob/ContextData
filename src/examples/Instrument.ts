import {FINOS} from '../../../../finos-fo/fo-financial-objects/typedefs/ts/FINOSInstrumentTypeDef';

interface Instrument extends Context, FINOS.FINOSInstrumentTypeDef {
    type: 'fdc3.instrument';
}
