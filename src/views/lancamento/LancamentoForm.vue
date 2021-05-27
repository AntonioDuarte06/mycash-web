<template>
    
    <form class="m-4">

        <div class="field">
            <label class="label">Descrição</label>
            <div class="control">
                <input class="input" type="text" placeholder="Descrição">
            </div>
        </div>
        <div class="field">
            <label class="label">Valor</label>
            <div class="control">
                <input class="input" type="number" placeholder="Valor" step="0.01">
            </div>
        </div>
        <div class="field">
            <label class="label">Data</label>
            <div class="control">
                <input class="input" type="date" placeholder="Data">
            </div>
        </div>
        <div class="control mb-5">
            <label class="radio mx-4">
                <input type="radio" name="tipo">
                Receita
            </label>
            <label class="radio">
                <input type="radio" name="tipo" checked>
                Despesa
            </label>
        </div>

        <input type="submit" value="+ Adicionar" class="button is-info is-fullwidth">
    </form>
</template>

<script>
export default {

}
</script>

<style>

</style>