```mermaid
stateDiagram-v2
state Initialization {

    category --> has_items
    has_items --> unchecked
    has_items --> checked
    item --> checked
    item --> unchecked
    item --> remove

}

```
