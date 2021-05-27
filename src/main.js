import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import moment from 'moment'

const app = createApp(App)

app.config.globalProperties.$filters = {
    currency(value) {
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2
        });
        return formatter.format(value);
    },

    date(value) {
        return moment(value).format('d/MM/YYYY');
    }
}

app.use(store).use(router).mount('#app')
