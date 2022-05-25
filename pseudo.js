class RegisteredUser {
  constructor(services = []) {
    this.services = services;
  }

  getTotal() {
    let total = 0;

    this.services.forEach(services, (index) => {
      let multimediaContent = services.getMultimediaContent();

      const additionFee = (service, fee) => {
        if (service) {
          return (total += fee);
        }
      };

      if (typeof services == StreamingServices) {
        total += multimediaContent.streamingPrice;

        additionFee(
          typeof services == PremiumContent,
          multimediaContent.additionalFee
        );
      } else {
        total += multimediaContent.DownloadPrice;

        additionFee(
          typeof services == DownloadService,
          multimediaContent.additionalFee
        );
      }
    });

    return total;
  }
}
