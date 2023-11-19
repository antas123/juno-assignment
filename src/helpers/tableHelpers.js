export const getRiskLevelColor = (riskLevel) => {
    switch (riskLevel.toLowerCase()) {
      case "high":
        return "red";
      case "medium":
        return "orange";
      default:
        return "green";
    }
  };