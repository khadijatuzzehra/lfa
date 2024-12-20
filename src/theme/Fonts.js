import metrics from './Metrics';

const size = {
  font6: metrics.screenWidth * (6 / 365),
  font8: metrics.screenWidth * (8 / 365),
  font9: metrics.screenWidth * (9 / 365),
  font10: metrics.screenWidth * (10 / 365),
  font11: metrics.screenWidth * (11 / 365),
  font12: metrics.screenWidth * (12 / 365),
  font13: metrics.screenWidth * (13 / 365),
  font14: metrics.screenWidth * (14 / 365),
  font15: metrics.screenWidth * (15 / 365),
  font16: metrics.screenWidth * (16 / 365),
  font18: metrics.screenWidth * (18 / 365),
  font20: metrics.screenWidth * (20 / 365),
  font22: metrics.screenWidth * (22 / 365),
  font24: metrics.screenWidth * (24 / 365),
};

const family = {
  bold: 'Poppins-Bold',
  light: 'Poppins-Light',
  medium: 'Poppins-Medium',
  regular: 'Poppins-Regular',
  semiBold: 'Poppins-SemiBold',
};

export default {
  size,
  family,
};
