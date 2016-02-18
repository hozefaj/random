## Learning Flexbox

### `justify-content`: aligns items horizontally
```css
flex-start: Items align to the left side of the container.
flex-end: Items align to the right side of the container.
center: Items align at the center of the container.
space-between: Items display with equal spacing between them.
space-around: Items display with equal spacing around them.
```

### `align-items`: aligns items vertically
```css
flex-start: Items align to the top of the container.
flex-end: Items align to the bottom of the container.
center: Items align at the vertical center of the container.
baseline: Items display at the baseline of the container.
stretch: Items are stretched to fit the container.
```

### `flex-direction`: defines the direction items are placed in the container
```css
row: Items are placed the same as the text direction.
row-reverse: Items are placed opposite to the text direction.
column: Items are placed top to bottom.
column-reverse: Items are placed bottom to top.
```
> When the `flex direction` is a column, `justify-content` changes to the vertical and `align-items` to the horizontal.

> Sometimes reversing the row or column order of a container is not enough. In these cases, we can apply the `order` property to individual items. By default, items have a value of 0, but we can use this property to set it to a positive or negative integer value.

###  `align-self`: property you can apply to individual items. 
> This property accepts the same values as `align-items`

### `flex-wrap`: 
```css
nowrap: Every item is fit to a single line.
wrap: Items wrap around to additional lines.
wrap-reverse: Items wrap around to additional lines in reverse.
```

> The two properties `flex-direction` and `flex-wrap` are used so often together that the shorthand property `flex-flow` was created to combine them. 

> This shorthand property accepts the value of one of the two properties separated by a space.

> For example, you can use `flex-flow: row wrap` to set rows and wrap them.
