import "../Context.js";
import "../FINOS/Contact.ts";

interface Contact extends Context {
  type: 'fdc3.contact',
  id: {
    //the following comes from the common FINOS definition
    ...contact,
    //an optional field that FDC3 uses to extend common def
      city?: string
  }
}
