<template>
  <div
    class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
  >
    <div class="w-1/5 mx-auto bg-slate-500 px-6 py-10">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-2xl font-bold text-gray-900">Create a new group</h2>
        <button @click="handleClose" class="hover:scale-125">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-8 hover:text-red-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <form>
        <div class="mb-6">
          <label for="name" class="text-sm font-medium text-gray-900 block mb-2"
            >Input name of group</label
          >
          <input
            type="text"
            id="name"
            class="bg-slate-600 border border-slate-900 text-white sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="carlink"
            required
            v-model="name"
          />
        </div>
        <div class="mb-6">
          <label for="text" class="text-sm font-medium text-gray-900 block mb-2"
            >Input your description</label
          >
          <input
            type="text"
            id="description"
            class="bg-slate-600 border border-slate-900 text-white sm:text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5"
            required
            placeholder="This group is for sharing car information"
            v-model="description"
          />
        </div>

        <button
          type="submit"
          class="w-full text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          @click="handleSubmit"
          @keyup.enter="handleSubmit"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      description: "",
    };
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleSubmit() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("description", this.description);

      axios
        .post(this.$store.state.UrlServe + "/groups", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response.data);
          this.$emit("success");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
