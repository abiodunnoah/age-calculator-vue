<template>
  <div
    class="w-full h-screen flex flex-col items-center text-2xl text-center"
    style="background-color: rgb(12, 129, 224)"
  >
    <h1 class="my-4 text-2xl text-green-500">Calculate The Age</h1>
    <div
      class="bg-gray-300 rounded-xl flex flex-col items-center"
      style="width: 450px; height: 440px"
    >
      <div
        class="bg-black rounded-xl mt-6 flex justify-center items-center text-white text-base leading-7"
        style="width: 400px; height: 250px"
      >
        <div class="mr-4 flex flex-col items-start">
          <div>Year:</div>
          <div>Month:</div>
          <div>Week:</div>
          <div>Day:</div>
          <div>Hour:</div>
          <div>Minute:</div>
          <div>Seconds:</div>
          <div>Milli.Sec:</div>
        </div>

        <div class="flex flex-col items-start">
          <div>
            <span
              class="px-1.5 py-0.5 rounded text-black"
              style="background-color: rgb(95, 173, 237)"
              >{{ age.years || 0 }}</span
            >
            Year
          </div>
          <div>
            <span
              class="px-1.5 py-0.5 rounded text-black"
              style="background-color: rgb(95, 173, 237)"
              >{{ age.months || 0 }}</span
            >
            Month
          </div>
          <div>
            <span
              class="px-1.5 py-0.5 rounded text-black"
              style="background-color: rgb(95, 173, 237)"
              >{{ age.weeks || 0 }}</span
            >
            week
          </div>
          <div>
            <span
              class="px-1.5 py-0.5 rounded text-black"
              style="background-color: rgb(95, 173, 237)"
              >{{ age.days || 0 }}</span
            >
            Day
          </div>
          <div>
            <span
              class="px-1.5 py-0.5 rounded text-black"
              style="background-color: rgb(95, 173, 237)"
              >{{ age.hours || 0 }}</span
            >
            Hour
          </div>
          <div>
            <span
              class="px-1.5 py-0.5 rounded text-black"
              style="background-color: rgb(95, 173, 237)"
              >{{ age.minutes || 0 }}</span
            >
            Minute
          </div>
          <div>
            <span
              class="px-1.5 py-0.5 rounded text-black"
              style="background-color: rgb(95, 173, 237)"
              >{{ age.seconds || 0 }}</span
            >
            Seconds
          </div>
          <div>
            <span
              class="px-1.5 py-0.5 rounded text-black"
              style="background-color: rgb(95, 173, 237)"
              >{{ age.milliSeconds || 0 }}</span
            >
            Milli.Sec
          </div>
        </div>
      </div>
      <div class="flex justify-between pt-3" style="width: 300px">
        <div>
          <p class="text-xs">Current Date</p>
          <input
            type="date"
            class="text-sm rounded-md px-1 py-1"
            style="box-shadow: 1px 1px 5px 1px rgba(15, 14, 14, 0.349)"
            v-model="currentAge"
            @input="setValue"
          />
        </div>
        <div>
          <p class="text-xs">My D.O.B.</p>
          <input
            type="date"
            class="text-sm rounded-md px-1 py-1"
            style="box-shadow: 1px 1px 5px 1px rgba(15, 14, 14, 0.349)"
            v-model="birthAge"
            @input="setValue"
          />
        </div>
      </div>
      <div class="mt-3">
        <p class="text-xs" style="color: red">{{ errorMessage }}</p>
        <button
          class="text-lg text-white px-12 py-1 rounded-md transition-all duration-300"
          style="box-shadow: 1px 1px 5px 1px rgba(15, 14, 14, 0.349)"
          :style="{ backgroundColor: color }"
          @click="calculateAge"
        >
          {{ buttonText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      currentAge: "",
      birthAge: "",
      errorMessage: "",
      age: 0,
      buttonText: "Please select Both Dates",
      color: "#FF0000",
    };
  },

  methods: {
    setValue() {
      if (this.currentAge && this.birthAge) {
        this.buttonText = "Calculate Age";
        this.color = "#0C81E0";
        this.errorMessage = "";
      }
    },

    calculateAge() {
      if (!this.currentAge || !this.birthAge) {
        this.errorMessage = "Both Birth Date and Current Date must be set.";
        this.color = "#FF0000";
        this.buttonText = "Invalid Dates";
        return;
      } else if (this.birthAge >= this.currentAge) {
        this.errorMessage = "Birth Date cannot be today or in the future.";
        this.buttonText = "Invalid Dates";
        this.color = "#FF0000";
        return;
      }

      const newCurrentAge = new Date(this.currentAge);
      const newBirthAge = new Date(this.birthAge);

      const milliSeconds = newCurrentAge - newBirthAge;
      const seconds = Math.floor(milliSeconds / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const weeks = Math.floor(days / 7);
      const years = newCurrentAge.getFullYear() - newBirthAge.getFullYear();
      let months = newCurrentAge.getMonth() - newBirthAge.getMonth();
      if (newCurrentAge.getDate() < newBirthAge.getDate()) {
        months -= 1;
      }
      months += years * 12;

      this.age = {
        milliSeconds,
        seconds,
        minutes,
        hours,
        days,
        weeks,
        months,
        years,
      };
    },
  },
};
</script>
