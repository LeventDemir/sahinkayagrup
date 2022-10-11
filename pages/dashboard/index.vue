<template>
    <div class="mb-6">
        <div id="references" class="column mt-6 pt-6">
            <div class="columns is-centered is-multiline">
                <div v-for="i in 4" :key="i" class="column is-one-third">
                    <Card />
                </div>
            </div>
        </div>
    </div>
</template>