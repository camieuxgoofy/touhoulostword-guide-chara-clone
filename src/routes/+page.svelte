<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import '@splidejs/svelte-splide/css/core';

	const options = {
		rewind: true,
		perPage: 2,
		gap: '1rem',
		height: '15rem',
		breakpoints: {
			1000: {
				perPage: 1
			}
		}
	};

	import aData from '../assets/data.json';

	let index = 0;
	const next = () => {
		index++;
		if (index === aData.length) {
			index = 0;
		}
	};
	const prev = () => {
		index--;
		if (index === -1) {
			index = aData.length - 1;
		}
	};
</script>

<section class="max-w-screen-xl mx-auto h-[100vh]">
	<div
		class="bg-[url('images/background.jpg')] fixed top-0 left-0 bg-center bg-cover blur-md brightness-110 w-full h-[100vh] -z-10 block"
	/>
	<div class="flex justify-center items-center h-full round">
		<div
			class="relative bg-white w-[25rem] h-[25rem] p-10 rounded-md grid content-center overflow-hidden"
		>
			<!-- {#each users as user (user.id)}
				<img src={user.name} alt={user.name} />
			{/each} -->
			<div>
				<Splide
					{options}
					on:mounted={(e) => console.log(e.detail.splide.length)}
					on:move={(e) => console.log('move to', e.detail.index)}
					aria-labelledby="basic-example-heading"
					class="custom-class"
				>
					<SplideSlide>
						{#each [aData[index]] as data (data.id)}
							<img
								class="mx-auto object-contain active:scale-105 transition-all"
								src={data.path}
								alt={data.name}
							/>
						{/each}
					</SplideSlide>
				</Splide>
			</div>
			<div class="splide__arrows">
				<button class="splide__arrow splide__arrow--prev">Prev</button>
				<button class="splide__arrow splide__arrow--next">Next</button>
			</div>
			<button on:click={prev} class="prev left-0">&#10094;</button>
			<button on:click={next} class="next right-0">&#10095;</button>
		</div>
	</div>
</section>

<style>
	.prev,
	.next {
		position: absolute;
		cursor: pointer;
		top: 50%;
	}
</style>
