<template>
	<div class="home">
		<img alt="Vue logo" :src="require('@/assets/logo.png')" @click="handleOpen" />
		<HelloWorld msg="测试使用组件守卫,进入清空vuex数据" />
		<MyDialog :visible.sync="visibleDialog" :dialogMsg="dialogMsg" @cancel="cancel" @confirm="confirm"><p>二次封装el-dialog</p></MyDialog>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';

import { SET_USER } from '@/store/mutation-types';

import HelloWorld from '@/components/Home/HelloWorld.vue';
import MyDialog from '@/components/element/MyDialog.vue';

import { dialogMsg } from './interface';

// Component.registerHooks(['beforeRouteEnter']);

@Component({
	components: {
		HelloWorld,
		MyDialog
	}
})
export default class Home extends Vue {
	private visibleDialog: boolean = false;
	private dialogMsg: dialogMsg = {
		title: 'el-dialog',
		cancel: '取 消',
		confirm: '确 定'
	};

	@Mutation(SET_USER) SET_USER: any;

	beforeRouteEnter(to: any, from: any, next: any): void {
		next((vm: any) => {
			vm.SET_USER([]);
		});
	}

	handleOpen(): void {
		this.visibleDialog = true;
	}

	cancel(): void {
		console.log('cancel');
		this.visibleDialog = false;
	}

	confirm(): void {
		console.log('confirm');
		this.visibleDialog = false;
	}
}
</script>
