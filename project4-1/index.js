const config = {
  url: "https://api.recursionist.io/builder/computers?type=",
  step1: document.getElementById("step1Select"),
  step1Model: document.getElementById("step1Model"),
  step2: document.getElementById("step2Select"),
  step2Model: document.getElementById("step2Model"),
  step3: document.getElementById("step3"),
  step3Brand: document.getElementById("step3Brand"),
  step3Model: document.getElementById("step3Model"),
  step4: document.getElementById("step4"),
  step4Storage: document.getElementById("step4Storage"),
  step4Brand: document.getElementById("step4Brand"),
  step4Model: document.getElementById("step4Model"),
  button: document.getElementById("btn"),
};
const Benchmark={}
//ブランドセレクトボックスの作成
const createSelect = (brand, partName, targetEle) => {
  fetch(config.url + partName)
    .then((response) => response.json())
    .then((data) => {
      if (partName === "ram") {
        let numList = config.step3.selectedIndex + "x";
        for (const key in data) {
          if (
            data[key]["Brand"] === brand &&
            data[key]["Model"].includes(numList)
          ) {
            targetEle.innerHTML += `<option value="${data[key]["Model"]}">${data[key]["Model"]}</option>`;
          }
        }
      } else if (partName === "ssd" || partName === "hdd") {
        for (const key in data) {
          let Storage =
            config.step4Storage[config.step4Storage.selectedIndex].value;
          if (
            data[key]["Brand"] === brand &&
            data[key]["Model"].includes(Storage)
          ) {
            targetEle.innerHTML += `<option value="${data[key]["Model"]}">${data[key]["Model"]}</option>`;
            Benchmark[data[key]["Brand"]][data[key]["Model"]]=data[key]["BenchMark"]
          }
        }
      } else {
        for (const key in data) {
          if (data[key]["Brand"] === brand) {
            targetEle.innerHTML += `<option value="${data[key]["Model"]}">${data[key]["Model"]}</option>`;
            Benchmark[data[key]["Brand"]][data[key]["Model"]]=data[key]["BenchMark"]
          }
        }
      }
    });
};

// HDDとSSDのストレージのセレクトボックスの作成
const createStorageSelect = (brand, partName, targetEle) => {
  fetch(config.url + partName)
    .then((response) => response.json())
    .then((data) => {
      for (const key in data) {
        if (data[key]["Brand"] === brand) {
          targetEle.innerHTML += `<option value="${data[key]["Model"]}">${data[key]["Model"]}</option>`;
          Benchmark[data[key]["Brand"]][data[key]["Model"]]=data[key]["BenchMark"]
        }
      }
    });
};

//セレクトボックスの初期化
const resetElement = (element) => {
  element.innerHTML = "";
  element.innerHTML = `<option selected value="-">-</option>`;
};

config.step1.addEventListener("change", (e) => {
  resetElement(config.step1Model);
  createSelect(e.target.value, "cpu", config.step1Model);
});

config.step2.addEventListener("change", (e) => {
  resetElement(config.step2Model);
  createSelect(e.target.value, "gpu", config.step2Model);
});

config.step3.addEventListener("change", () => {
  resetElement(config.step3Brand);
  config.step3Brand.innerHTML = `<option selected value="-">-</option>
  <option value="G.SKILL">G.SKILL</option>
    <option value="Crucial">Crucial</option>
    <option value="Corsair">Corsair</option>
    <option value="HyperX">HyperX</option>`;
});

config.step3Brand.addEventListener("change", (e) => {
  resetElement(config.step3Model);
  createSelect(e.target.value, "ram", config.step3Model);
});

config.step4.addEventListener("change", (e) => {
  resetElement(config.step4Storage);
  if (e.target.value === "hdd") {
    config.step4Storage.innerHTML = `
    <option selected value="-">-</option>
  <option value="12TB">12TB</option>
  <option value="10TB">10TB</option>
  <option value="8TB">8TB</option>
  <option value="6TB">6TB</option>
  <option value="5TB">5TB</option>
  <option value="4TB">4TB</option>
  <option value="3TB">3TB</option>
  <option value="2TB">2TB</option>
  <option value="1.5TB">1.5TB</option>
  <option value="1TB">1TB</option>
  <option value="500GB">500GB</option>
  <option value="450GB">450GB</option>
  <option value="300GB">300GB</option>
  <option value="250GB">250GB</option>`;
  } else {
    config.step4Storage.innerHTML = `
    <option selected value="-">-</option>
  <option value="4TB">4TB</option>
  <option value="2TB">2TB</option>
  <option value="1TB">1TB</option>
  <option value="960GB">960GB</option>
  <option value="800GB">800GB</option>
  <option value="512GB">512GB</option>
  <option value="500GB">500GB</option>
  <option value="480GB">480GB</option>
  <option value="400GB">400GB</option>
  <option value="280GB">280GB</option>
  <option value="256GB">256GB</option>
  <option value="250GB">250GB</option>
  <option value="128GB">128GB</option>
  <option value="118GB">118GB</option>
  <option value="58GB">58GB</option>`;
  }
});

config.step4Storage.addEventListener("change", () => {
  resetElement(config.step4Brand);
  config.step4Brand.innerHTML = `
  <option selected value="-">-</option>
  <option value="WD">WD</option>
    <option value="HGST">HGST</option>
    <option value="Seagate">Seagate</option>
    <option value="Toshiba">Toshiba</option>
    <option value="Hitachi">Hitachi</option>`;
});

config.step4Brand.addEventListener("change", (e) => {
  resetElement(config.step4Model);
  storageType = config.step4[config.step4.selectedIndex].value;
  createSelect(e.target.value, storageType, config.step4Model);
});



const calcScore = () => {
  let allScore = {
    gaming: 0,
    work: 0,
  };
  let cpuScore =Benchmark[config.step1[config.step1.selectedIndex].value][config.step1Model[config.step1Model.selectedIndex].value]
  let gpuScore =Benchmark[config.step2[config.step2.selectedIndex].value][config.step2Model[config.step2Model.selectedIndex].value]
  let ramScore =Benchmark[config.step3Brand[config.step3Brand.selectedIndex].value][config.step3Model[config.step3Model.selectedIndex].value]
  let storageScore=Benchmark[config.step4Brand[config.step4Brand.selectedIndex].value][config.step4Model[config.step4Model.selectedIndex].value]
  let scoreOfStorage =config.step4[config.step4.selectedIndex].value === "ssd"
  ? parseInt(scoreOfStorage * 0.1)
  : parseInt(scoreOfStorage * 0.025);
  allScore.gaming =
    parseInt(cpuScore * 0.25 + gpuScore * 0.6 + ramScore * 0.125) +
    storageScore;
    allScore.work = parseInt(
    cpuScore * 0.6 + gpuScore * 0.25 + ramScore * 0.1 + scoreOfStorage * 0.05
  );
  console.log(allScore)
  return allScore;
};

let count = 0;
config.button.addEventListener("click", () => {
  result = document.getElementById("result");
  count += 1;
  resultScore = calcScore();
  result.innerHTML += `
  <header class="resultHeader text-white text-center">Your PC${count}</header>
      <main class="m-3">
        <div class="CPU">
          <h2 class="text-white">CPU</h2>
          <p class="text-white">Brand:  ${
            config.step1[config.step1.selectedIndex].value
          }<br />Model: ${
    config.step1Model[config.step1Model.selectedIndex].value
  }</p>
        </div>
        <div class="GPU">
          <h2 class="text-white">GPU</h2>
          <p class="text-white">Brand:  ${
            config.step2[config.step2.selectedIndex].value
          }<br />Model:  ${
    config.step2Model[config.step2Model.selectedIndex].value
  }</p>
        </div>
        <div class="RAM">
          <h2 class="text-white">RAM</h2>
          <p class="text-white">Brand:  ${
            config.step3Brand[config.step3Brand.selectedIndex].value
          }<br />Model:  ${
    config.step3Model[config.step3Model.selectedIndex].value
  }</p>
        </div>
        <div class="Storage">
          <h2 class="text-white">Storage</h2>
          <p class="text-white">
            Disk:${
              config.step4[config.step4.selectedIndex].value
            }<br />Storage:  ${
    config.step4Storage[config.step4Storage.selectedIndex].value
  }<br />Brand:  ${
    config.step4Brand[config.step4Brand.selectedIndex].value
  }<br />Model:  ${config.step4Model[config.step4Model.selectedIndex].value}
          </p>
        </div>
      </main>
      <div class="resultFooter container d-flex justify-content-between align-items-center">
        <p class="text-white">Gaming: ${resultScore.gaming}%</p>
        <p class="text-white">Work: ${resultScore.work}%</p>
      </div>`;
});
