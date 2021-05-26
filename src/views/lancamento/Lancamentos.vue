<template>
  
  <Lancamento 
  v-for="lanc in lancamentos" 
  :key="lanc.id"
  :lancamento="lanc"/>

</template>

<script>

import Lancamento from './Lancamento'
export default {
    components:{
        Lancamento
    },
    data(){
        return {
            lancamentos: [
                 {
                "id":  3 ,
                "descricao":  "Livro",
                "dados":  "2021-05-12",
                "valor":  29.9,
                "tipo":  "DESPESA"
                },
                {
                "id" :  4,
                "descricao":  "Venda Liquidificador ",
                "dados":  " 2021-05-12 ",
                "valor":  50.00,
                "tipo":  " RECEITA "
                },
                {
                "id":  5,
                "descricao":  "Mesa",
                "dados":  "2021-05-12",
                "valor":  51.00,
                "tipo":  "DESPESA"
                },
            ]
        }
    }
}
</script>

<style>

</style>