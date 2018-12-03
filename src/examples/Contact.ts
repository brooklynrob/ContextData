import "../Context.ts";

// The following typedefs would come from http://www.github.com/fdc3/typedefs ...
// which itself would be a form of http://www.github.com/finos/typedefs
// (Or they simply are imported right from www.github.com/finos/typedefs)
import "../finos/typedefs/Contact.ts"

interface Contact extends Context {
  type: 'fdc3.contact';
  id: {
    //the following comes from the common FINOS definition

    //an optional field that FDC3 uses to extend common def

  };
}
