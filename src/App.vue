<script setup>
import NoApiKeyView from "@/views/NoApiKeyView.vue";
import Layout from "@/containers/Layout.vue";
import { useApiError, useMenuItems } from "@/utils/hooks";
import ApiTokenNotFound from "@/components/ApiTokenNotFound.vue";
import Spinner from "@/components/Spinner.vue";

const apiKeyExists = '7cb2bc6dd18e8895e6c3945da0e05e9cef3b0f92';

const { items, loading } = useMenuItems();
const { error } = useApiError();
</script>

<template>
  <spinner v-if="loading"/>
  <no-api-key-view v-else-if="!apiKeyExists" />
  <api-token-not-found v-else-if="error" />
  <Layout :menu-items="items" v-else>
    <RouterView />
  </Layout>
</template>

<style>
@import "@/assets/css/bootstrap.min.css";
@import "@/assets/css/main.css";
@import "@/assets/css/lineicons.css";
@import "@/assets/css/tiny-slider.css";
</style>
