<!-- Licensed to the Apache Software Foundation (ASF) under one or more
contributor license agreements.  See the NOTICE file distributed with
this work for additional information regarding copyright ownership.
The ASF licenses this file to You under the Apache License, Version 2.0
(the "License"); you may not use this file except in compliance with
the License.  You may obtain a copy of the License at

  http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License. -->
<template>
  <div class="flex-h content">
    <policy-list />
    <div class="flex-v list" v-loading="continousProfilingStore.instancesLoading">
      <instance-list :config="config" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import type { PropType } from "vue";
  import { useContinousProfilingStore } from "@/store/modules/continous-profiling";
  import PolicyList from "./components/PolicyList.vue";
  import InstanceList from "./components/InstanceList.vue";

  const continousProfilingStore = useContinousProfilingStore();

  /*global defineProps */
  defineProps({
    config: {
      type: Object as PropType<any>,
      default: () => ({}),
    },
  });
</script>
<style lang="scss" scoped>
  .content {
    height: calc(100% - 50px);
    width: 100%;
  }

  .list {
    height: 100%;
    flex-grow: 2;
    min-width: 600px;
    overflow: hidden;
  }
</style>
