export default function deleteVehicle(
  vehicleMakeData,
  vehicleModelData,
  selectedVehicleData
) {
  const { make: selectedMake, model: selectedModel } = selectedVehicleData;

  const findModelMatch = vehicleModelData.find(
    (model) =>
      model.makeid === selectedMake.id &&
      model.abrv === selectedModel.abrv &&
      model.name === selectedModel.name
  );

  const vehicleModelIndex = vehicleModelData.indexOf(findModelMatch);

  if (vehicleModelIndex > -1) {
    vehicleModelData.splice(vehicleModelIndex, 1);
  }

  // if the last remaining model under a certain vehicle make is deleted also delete the vehicle make

  const remainingModels = vehicleModelData.some(
    (model) => model.makeid === selectedMake.id
  );

  if (!remainingModels) {
    const findMakeMatch = vehicleMakeData.find(
      (make) =>
        make.name === selectedMake.name && make.abrv === selectedMake.abrv
    );

    const vehicleMakeIndex = vehicleMakeData.indexOf(findMakeMatch);
    if (vehicleMakeIndex > -1) {
      vehicleMakeData.splice(vehicleMakeIndex, 1);
    }
  }
}
