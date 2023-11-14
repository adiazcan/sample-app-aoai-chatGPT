
export interface IPatientStore {
  patientId: string;
}

export const emptyPatientStore = (): IPatientStore => {
  return {
    patientId: "*"
  };
};
