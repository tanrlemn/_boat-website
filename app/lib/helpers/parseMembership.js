export function parseMembership(membership, benefitsText) {
  const title = membership.title;
  const subtitle = membership.subtitle;
  const monthlyPrice = membership.monthly_price;
  const yearlyPrice = membership.yearly_price;
  const backgroundColor = membership.background_color;
  const description = membership.description;
  const benefits = JSON.parse(membership.benefits)[0];
  const exclusiveAccess = benefits.exclusive_access;
  const freePrints = benefits.free_prints;
  const qaAccess = benefits.qa_access;
  const weeklyCoaching = benefits.weekly_coaching;
  const fileAccess = benefits.file_access;
  const fileDownloads = benefits.file_downloads;
  const enterprise = benefits.enterprise;
  const discounts = benefits.discounts;
  const discountPercent = discounts.discount_percent;
  const commissionDiscount = discounts.commission_discount;

  const checks = () => {
    const checksArr = [];
    checksArr.unshift(
      'Stream released music',
      'Listen to Fake Pete Remixes',
      'Access to the Fake Pete & YOURHEAD Shops',
      'Request to be painted',
      'Receive updates about art & music'
    );

    if (exclusiveAccess) {
      const str = benefitsText.find(
        (item) => item.benefit == 'exclusive_access'
      ).item_text;
      checksArr.unshift(str);
    }

    if (fileAccess) {
      const str = benefitsText.find(
        (item) => item.benefit == 'file_access'
      ).item_text;
      checksArr.unshift(str);
    }

    if (fileDownloads) {
      const str = benefitsText.find(
        (item) => item.benefit == 'file_downloads'
      ).item_text;
      checksArr.unshift(str);
    }

    if (qaAccess) {
      const str = benefitsText.find(
        (item) => item.benefit == 'qa_access'
      ).item_text;
      checksArr.unshift(str);
    }

    if (freePrints) {
      const str = benefitsText.find(
        (item) => item.benefit == 'free_prints'
      ).item_text;
      checksArr.unshift(str);
    }

    if (discountPercent > 0) {
      checksArr.unshift(
        `${discountPercent}% off of everything else – unlimited uses`
      );
    }

    if (commissionDiscount > 0) {
      checksArr.unshift(`${commissionDiscount}% off of commissioned originals`);
    }

    if (weeklyCoaching) {
      const str = benefitsText.find(
        (item) => item.benefit == 'weekly_coaching'
      ).item_text;
      checksArr.unshift(str);
    }

    if (enterprise) {
      const str = benefitsText.find(
        (item) => item.benefit == 'enterprise'
      ).item_text;
      checksArr.unshift(str);
    }
    return checksArr;
  };

  return {
    title: title,
    subtitle: subtitle,
    monthlyPrice: monthlyPrice,
    yearlyPrice: yearlyPrice,
    backgroundColor: backgroundColor,
    description: description,
    checks: checks(),
  };
}
