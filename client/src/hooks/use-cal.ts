import { useEffect, useCallback } from "react";
import { getCalApi } from "@calcom/embed-react";

const CAL_LINK = "mykoal-deshazo/consult";
const CAL_NAMESPACE = "consult";

export function useCalModal() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", { layout: "month_view", hideEventTypeDetails: false });
    })();
  }, []);

  const openCal = useCallback(async () => {
    const cal = await getCalApi({ namespace: CAL_NAMESPACE });
    cal("modal", { calLink: CAL_LINK, config: { layout: "month_view" } });
  }, []);

  return openCal;
}
