<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import '@splidejs/svelte-splide/css/core';

	import data from '../assets/data.json';

	/* Arrow */
	// let index = 0;
	// const next = () => {
	// 	index++;
	// 	if (index === aData.length) {
	// 		index = 0;
	// 	}
	// };
	// const prev = () => {
	// 	index--;
	// 	if (index === -1) {
	// 		index = aData.length - 1;
	// 	}
	// };
</script>
<svelte:head>
	<title>TLCG</title>
</svelte:head>

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
					options={{
						type: 'loop',
						rewind: false,
						pagination: false,
						lazyLoad: 'nearby',
					}}
					>
					{#each data as image}
						<SplideSlide>
							<img src={image.path} alt={image.name} />
						</SplideSlide>
					{/each}
				</Splide>
			</div>
			<!-- <button on:click={prev} class="prev left-0">&#10094;</button>
			<button on:click={next} class="next right-0">&#10095;</button> -->
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
