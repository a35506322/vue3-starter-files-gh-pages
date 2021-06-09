export default {
    props:{
        //驗證要為物件且必填
        page:{
            type: Object,
            required: true
        }
    },
    emits:{
        //驗證須為數字
        transferPage:(page)=>{
            if(typeof page !== 'number')
            {
                console.warn("需要數字型別")
            }
            return typeof page ==='number';
        }
    },
    methods: {
        //切換頁數
        changePage(e){
            //這邊很聰明利用節點判別去做要不要emit
            //可以點nodeName =A
            //不能點nodeName =LI
            if(e.target.nodeName !=="LI")
            {
                this.$emit('transferPage',Number(e.target.dataset.page));
            }         
        }
    },
    computed:{
        //總共頁數
        pageTotal:{
            get(){
                return Math.ceil(this.page.dataTotal/this.page.perpage);
            }
        },
    },
    template:    
    `
      <ul class="pagination" id="pageId" v-on:click.prevent="changePage">
        <li class="page-item" v-if="page.currentPage>1"><a class="page-link" href="#" v-bind:data-page="Number(page.currentPage)-1">Previous</a></li>
        <li class="page-item disabled"  v-else><span class="page-link">Previous</span></li>
        <template v-for="(index) in pageTotal" v-bind:key="'key'+index">
            <li class="page-item active" v-if="page.currentPage===index"><a class="page-link" href="#" v-bind:data-page="index" >{{index}}</a></li>
            <li class="page-item" v-else><a class="page-link" href="#" v-bind:data-page="index" >{{index}}</a></li>
        </template>
        <li class="page-item"  v-if="page.currentPage<pageTotal"><a class="page-link" href="#" v-bind:data-page="Number(page.currentPage)+1">Next</a></li>
        <li class="page-item disabled" v-else><span class="page-link">Next</span></li>
      </ul>
    `   
}