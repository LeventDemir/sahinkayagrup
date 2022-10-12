<template>
    <div class="card is-clickable">
        <div class="card-image">
            <figure class="image is-4by3">
                <img :src="data.photo" alt="Placeholder image">
            </figure>
        </div>
        <div class="card-content">
            <div class="content">
                {{ data.description }}
                <br>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'dashboard',
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>