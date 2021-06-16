Adapted from https://codepen.io/bennettfeely/pen/qRJOZJ

<template>
  <div id="menu-container">
    <nav id="menu" :class="{ open: isOpen }">
      <RouterLink to="/contact" class="disc l1">
        <div>Contact</div>
      </RouterLink>
      <RouterLink to="/projects" class="disc l2">
        <div>Portfolio</div>
      </RouterLink>
      <RouterLink to="/about" class="disc l3">
        <div>About</div>
      </RouterLink>
      <RouterLink to="/" class="disc l4">
        <div>Home</div>
      </RouterLink>
      <a class="disc l5 toggle" @click="isOpen = !isOpen">
        <span v-if="isOpen" aria-label="close">
          ✕
        </span>
        <span v-else aria-label="menu">
          ☰
        </span>
      </a>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return { isOpen: false }
  }
}
</script>

<style lang="scss">
@use "sass:math";

$size : 40px;
$items : 5;
$transition : .5s;
$bounce : cubic-bezier(.3,1.4,.5,.9);
$color-outer : mix(white, #660080, 30%);
$color-inner : mix(white, yellow, 30%);
$background: mix($color-inner, $color-outer);
$black : shade($color-outer, 80%);
$start-scale : .5;
$start-rot : 190deg;

#menu-container {
  position: absolute;
  width: $size * ($items + 2.2);
  height: $size * ($items + 2.2);
  right: 0;
  top: 0;
  overflow: hidden;
  pointer-events: none;
}

nav {
  display: block;
  position: absolute;
  width: $size * $items * 2;
	height: $size * $items * 2;
  z-index: 3;
	user-select: none;
	transform: translate3d($size*.5,-$size*.5,0);
	transition: transform $transition $bounce;
  top: -$size * ($items - 2.2);
  right: -$size * ($items - 2.2);
  &.open {
		transform: translate3d(0,0,0);
	}
}

.disc {
	position: absolute;
	display: inline-block;
	text-align: center;
	cursor: pointer;
	font: $size*.5 Oxygen, sans-serif;
	line-height: $size * .8;
	padding-top: $size * .2;
	border-radius: $size * $items;
	transform: scale3d($start-scale, $start-scale, $start-scale) rotate3d(0,0,1,$start-rot);
  pointer-events: none;
	opacity: 0;
	cursor: pointer;
	transition: transform $transition $bounce, opacity $transition;

	div {
		transform: rotate(180deg);
	}

	.open & {
		pointer-events: auto;
		opacity: 0.8;
    display: inline-block;
	}
}

@for $i from 1 through $items {
	.l#{$i} {
		$i : $i - 1;
		$-i : $items - $i;
		$pct : math.div($i, $items) * 100%;
		$color :  mix($color-inner, $color-outer, $pct);
    $darker : mix(black, $color, 90%);

		top: $i * $size;
		left: $i * $size;
		right: $i * $size;
		bottom: $i * $size;
		background: $color;
    color: $darker;
    font-weight: bold;
		transition-delay: math.div($i * $transition, $items);

		.open & {
			transition-delay: math.div($i * $transition, $items);
			transform: scale3d(1,1,1) rotate3d(0,0,1,$start-rot);
			opacity: 0.8;

			&:hover {
        text-decoration: none;
				background: $darker;
				color: $color;
				transition-delay: 0s;
			}
      @media (hover: none) {
        &:hover {
          background: $color;
          color: $darker;
        }
      }
			&.nuxt-link-exact-active {
        div::before {
          content: '• ';
        }
			}

			&.toggle {
				transform: scale3d(.9,.9,.9) rotate3d(0,0,1,$start-rot);
			}
		}
	}
}

.toggle {
	line-height: $size*2;
	padding: 0;
	width: $size*2;
	background: transparentize($color-inner, 0.5);
	opacity: 0.8;
	transform: none;
	pointer-events: auto;
  cursor: context-menu;
	transition-delay: 0s;
  font-size: $size*0.8;

	&:hover {
    text-decoration: none;
    transform: scale3d(1.1, 1.1, 1.1);
    opacity: 1;
	}
}
</style>
