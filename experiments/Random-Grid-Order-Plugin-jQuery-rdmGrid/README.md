# rdmGrid 1.0.0

jQuery plugin to **randomly order a grid of custom elements** at website page load, when triggered by custom button or function call.<br>

* Multiple grids on one page are supported
* Dynamic generated content is supported

## Demo

You can find a demo under [me-and-the-media.com/work/rdmgrid.html](https://me-and-the-media.com/work/rdmgrid.html) or inside the [demo](https://github.com/patrick-hlt/rdm-grid/tree/master/demo) folder.

## How To Use

### jQuery Plugin Integration

Just include the [rdmgrid.js](https://github.com/patrick-hlt/rdm-grid/tree/master/rdmgrid.js) or [rdmgrid.min.js](https://github.com/patrick-hlt/rdm-grid/tree/master/rdmgrid.min.js) after your jQuery integration.<br>
Please consider the [dependencies](#dependencies) section.

### HTML Markup

#### Grid

You can use any HTML structure you like. Simply have a parent wrapper element an some children as grid elements.

Attribute | Status | Explanation
-- | -- | --
**id**	| required	| The `id` is **required** and used to connect the grid to a trigger.
**class**	| optional	| The `class` attribute is **optional**. Use the class attribute if you want to use **multiple grids** with only one initial function call (see [Javascript](#javascript)).

All direct child elements are automatically defined as grid elements.

```html
<div id="one-grid" class="multiple-grids">
	<div>Grid Element 1</div>
	<div>Grid Element 2</div>
	<div>Grid Element 3</div>
	...
</div>

<ul id="another-grid" class="multiple-grids">
	<li>Grid Element 1</li>
	<li>Grid Element 2</li>
	<li>Grid Element 3</li>
	...
</ul>
```
You can also mix the type of the children:
```html
<div id="one-more-grid" class="multiple-grids">
	<a>Grid Element 1</a>
    <ul><li>Grid Element 2</li></ul>
	<div>Grid Element 3</div>
	...
</div>
```

Inside each grid child element you can use HTML as you wish.

#### HTML Trigger

Assign the `data-rg` attribute to any element you want to use as a clickable trigger.<br>
The value of `data-rg` is the `id` of the grid you want to trigger without `#`.

Also assign the default class `rg_btn` to the trigger.<br>
You can use any other class as well, simply commit it with the option `btns` at the initial function call (see [Javascript](#javascript) & [Options](#options) sections).

```html
<button class="rg_btn" data-rg="rg_grid">Click me!</button>

<a href="#" class="rg_btn" data-rg="rg_grid">Click me!</a>

<li class="rg_btn" data-rg="rg_grid">Click me!</li>
```

### Javascript

#### Plugin Initialization

Initialize the jQuery plugin by assigning one grid by passing an `id` or multiple by `class`.

```javascript
$(' ... ').rdmGrid();

$('#one-grid').rdmGrid();

$('.multiple-grids').rdmGrid();
```

#### Pass Options

You can pass any of the [options](#options) mentioned below:

```javascript
$('#one-grid').rdmGrid({
	animationSpeed: 250,
	columns: 2
});

$('.multiple-grids').rdmGrid({
	initialShuffle: false
});
```

#### Javascript Trigger

You can trigger the function that reorders the grid elements by calling the `.trigger()` function.<br>

1) Assign the plugin initialization to a variable:
```javascript
var grid = $('#one-grid').rdmGrid();
```
2) Call the function:
```javascript
grid.trigger();
```
You can also pass an `id` of this or another grid (without `#`) or an jQuery element:
```javascript
// shuffles the grid with the id 'one-grid'
grid.trigger('one-grid'); 
grid.trigger($('#one-grid'));

// this will shuffle another previous initialized grid
grid.trigger('another-grid'); 
grid.trigger($('#another-grid'));
```


## Options

Option Name | Default Value | Value Type | Explanation
--- | --- | --- | ---
animationSpeed	| 350			| Int		| Duration of the shuffle animation in `ms`.
breakPoint		| 800			| Int		| Window width in `px` when `columns` is set to `1`. Only works on page load when `responsive` is set to `true`.
btns			| 'rg_btn'		| String	| Class-Name for the clickable trigger. You can assign this class to any element.
columns			| 3				| Int		| Columns of the grid. On page load when `responsive` is set to `true` and window width in `px` is below the value of `breakPoint` this value is set to `1`.
fadeInSpeed		| 350			| Int		| Duration of fade in animation in `ms` on page load after the CSS is completely assigned to the grid elements.
initialShuffle	| true			| Boolean	| When set to `false` elements are not shuffled on page load.
responsive		| true			| Boolean	| On page load when this value is set to `true` and window width in `px` is below the value of `breakPoint` the value of `columns` is set to `1`.

## Dependencies

Requires jQuery Version 1.2.4 or higher.

## Author

Patrick Hollstein<br>
[me-and-the-media.com/work/rdmgrid.html](https://me-and-the-media.com/work/rdmgrid.html) (jQuery Plugin Demo)

## License

This project is published under the **MIT-License**.<br>
**You can use this script for free in private and commercial projects** and modify it as you wish on your own risks without giving attribution to the author. Just leave the initial comment in the `rdmgrid.js` file as it is.

## Version History

#### 1.0.0 - Release

Release on GitHub.