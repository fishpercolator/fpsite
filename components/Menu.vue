Adapted from https://codepen.io/bennettfeely/pen/qRJOZJ

<template>
  <nav id="menu" v-bind:class="{ open: isOpen }">
    <router-link to="/contact" class="disc l1"><div>Contact</div></router-link>
    <router-link to="/projects" class="disc l2"><div>Portfolio</div></router-link>
    <router-link to="/about" class="disc l3"><div>About</div></router-link>
    <router-link to="/" class="disc l4"><div>Home</div></router-link>
    <a class="disc l5 toggle" @click="isOpen = !isOpen">
      <span v-if="isOpen">Close</span>
      <span v-else>Menu</span>
    </a>
  </nav>
</template>

<script>
export default {
  data () {
    return {isOpen: false}
  }
}
</script>

<style lang="scss">
$size : 40px;
$items : 5;
$transition : .5s;
$bounce : cubic-bezier(.3,1.4,.5,.9);
$color-outer : transparentize(mix(white, #660080, 30%), 0.2);
$color-inner : transparentize(mix(white, yellow, 30%), 0.2);
$background: mix($color-inner, $color-outer);
$black : shade($color-outer, 80%);
$start-scale : .5;
$start-rot : 190deg;

nav {
  display: block;
  position: fixed;
  width: $size * $items * 2;
	height: $size * $items * 2;
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
		opacity: 1;	
	}
}

@for $i from 1 through $items {
	.l#{$i} {
		$i : $i - 1;
		$-i : $items - $i;
		$pct : $i/$items * 100%;
		$color :  mix($color-inner, $color-outer, $pct);
		
		top: $i * $size;
		left: $i * $size;
		right: $i * $size;
		bottom: $i * $size;
		background: $color;
    color: mix(black, $color, 90%);
    font-weight: bold;
		transition-delay: $i * $transition/$items;
	
		.open & {
			transition-delay: $i * $transition/$items;
			transform: scale3d(1,1,1) rotate3d(0,0,1,$start-rot);
			opacity: 1;
			
			&:hover {
        text-decoration: none;
				background: mix(black, $color, 90%);
				color: $color;
				transition-delay: 0s;
			}
	
			&:active {
				background: mix(black, $color, 50%);
				color: $color;
			}
			
			&.toggle {
				transform: scale3d(.9,.9,.9) rotate3d(0,0,1,$start-rot - 180deg);
			}
		}
	}
}

.toggle {
	line-height: $size*2;
	padding: 0;
	width: $size*2;
	background: $color-inner;
	opacity: 1;
	transform: none;
	pointer-events: auto;
	transition-delay: 0s;
	
	.open & {
		transform: rotate3d(0,0,1,0deg);
	}

	&:hover {
		background: mix(black, $color-inner, 90%);
		color: $color-inner;
    text-decoration: none;
	}
	&:active {
		background: mix(black, $color-inner, 50%);
		color: rgba($color-inner, .5);
		transform: scale(.9);
		transition-duration: 0s;
	}
} 
</style>
