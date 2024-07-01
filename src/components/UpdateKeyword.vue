<template>
  <div v-if="isOpen">
    <div
      class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
    >
      <div
        class="px-9 pt-5 pb-10 flex flex-col gap-y-8 bg-gray-800 text-white rounded-xl max-w-[510px] max-h-[468px]"
      >
        <div class="flex cursor-pointer justify-end" @click="handleClose">
          <img
            width="32"
            height="32"
            src="https://img.icons8.com/ios/50/ffffff/delete-sign--v1.png"
            alt="delete-sign--v1"
          />
        </div>
        <div>
          <div class="font-semibold text-2xl">Update Keyword for SEO</div>
        </div>
        <div>
          <form method="/post" action="" class="flex flex-col space-y-8">
            <div class="flex flex-col gap-y-8 h-12 space-x-2 w-auto">
              <input
                type="text"
                id="keyword"
                name="keyword"
                v-model="new_keyword"
                class="bg-transparent border-2 rounded-full py-4 px-6 text-[16px] leading-[22.4px] font-light placeholder:text-white text-white"
                placeholder="input your new keyword"
              />
            </div>
            <div
              class="flex flex-col gap-y-8 px-1 space-x-2 w-auto border rounded-lg"
            >
              <select
                class="bg-gray-800 py-2 px-3"
                name="groups"
                id=""
                v-model="new_group_id"
              >
                <option
                  class="w-full"
                  v-for="group in groups"
                  :key="group.id"
                  :value="group.id"
                >
                  {{ group.name }}
                </option>
              </select>
            </div>
            <button
              type="submit"
              class="max-w-[200px] h-auto rounded-full bg-white text-black py-3 px-6"
              @click.prevent="updateKeyword"
            >
              <span class="text-gray-800 font-semibold">Update</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    keyword: {
      type: String,
      required: true,
    },
    groups: {
      type: Array,
      required: true,
    },
    group_id: {
      type: Number,
      required: true,
    },
    keyword_id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      isOpen: true,
      new_group_id: this.group_id,
      new_keyword: this.keyword,
    };
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleUpdate() {
      this.$emit("update", this.keyword, this.new_group_id);
    },
    updateKeyword() {
      const jsonData = {
        keyword: this.new_keyword,
        group_id: this.new_group_id,
      };

      axios
        .put(
          this.$store.state.UrlServe + "/keywords/" + this.keyword_id,
          jsonData,
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          this.handleUpdate();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
