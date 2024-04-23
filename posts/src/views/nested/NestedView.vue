<template>
	<div>
		<ul class="nav nav-pills">
			<li class="nav-item">
				<RouterLink
					class="nav-link"
					active-class="active"
					aria-current="page"
					to="/nested/one"
					>Nested1</RouterLink
				>
			</li>
			<li class="nav-item">
				<RouterLink class="nav-link" active-class="active" to="/nested/two"
					>Nested2</RouterLink
				>
			</li>
		</ul>
		<hr class="my-4" />

		<RouterView></RouterView>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
