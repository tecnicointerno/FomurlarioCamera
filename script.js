document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-camera');
    const cameraContainer = document.getElementById('camera-container');
    let cameraCount = 1;
  
    addButton.addEventListener('click', function () {
      cameraCount++;
  
      const newCamera = document.createElement('div');
      newCamera.classList.add('camera');
      newCamera.innerHTML = `
        <h2>Câmera ${cameraCount}</h2>
        <label for="rack-${cameraCount}">Rack:</label>
        <input type="text" name="rack-${cameraCount}" id="rack-${cameraCount}">
        <label for="ip-${cameraCount}">IP:</label>
        <input type="text" name="ip-${cameraCount}" id="ip-${cameraCount}">
        <label for="nomenclatura-${cameraCount}">Nomenclatura:</label>
        <input type="text" name="nomenclatura-${cameraCount}" id="nomenclatura-${cameraCount}">
        <label for="local-rack-${cameraCount}">Local do Rack:</label>
        <input type="text" name="local-rack-${cameraCount}" id="local-rack-${cameraCount}">
        <label for="porta-switch-${cameraCount}">Porta Switch:</label>
        <input type="text" name="porta-switch-${cameraCount}" id="porta-switch-${cameraCount}">
        <label for="local-camera-${cameraCount}">Local da Câmera:</label>
        <input type="text" name="local-camera-${cameraCount}" id="local-camera-${cameraCount}">
      `;
  
      cameraContainer.appendChild(newCamera);
    });
  });





  
  
