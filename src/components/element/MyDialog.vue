<template>
	<el-dialog :visible.sync="visibleDialog" :title="dialogMsg.title">
		<!--内容区域的默认插槽-->
		<slot></slot>
		<!--使用弹框的footer插槽添加按钮-->
		<template #footer>
			<!--对外继续暴露footer插槽，有个别弹框按钮需要自定义-->
			<slot name="footer">
				<!--将取消与确定按钮集成到内部-->
				<span>
					<el-button @click="handleCancel">{{ dialogMsg.cancel }}</el-button>
					<el-button type="primary" @click="handleConfirm">{{ dialogMsg.confirm }}</el-button>
				</span>
			</slot>
		</template>
	</el-dialog>
</template>

<script lang="ts">
import { Component, Vue, Emit, Prop } from 'vue-property-decorator';

@Component
export default class CusDialog extends Vue {
	@Prop({ type: Boolean, default: false })
	readonly visible!: boolean;

	@Prop(Object) readonly dialogMsg!: object;

	get visibleDialog(): boolean {
		return this.visible;
	}

	set visibleDialog(val) {
		this.$emit('update:visible');
	}

	// 对外抛出cancel事件
	@Emit('cancel')
	handleCancel(): void {
		return;
	}

	// 对外抛出 confirm事件
	@Emit('confirm')
	handleConfirm(): void {
		return;
	}
}
</script>
