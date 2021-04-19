exports.bodyJsonSchema = {
    type: 'object',
    required: ['standardAd','featureAd','premiumAd','totalPrice','userId'],
    properties: {
      userId: {type: 'number'} , // Not actual auth implentation , just for dummy testing only  , 
      standardAd: { type: 'number' },
      featureAd: { type: 'number' },
      premiumAd: { type: 'number' },
      totalPrice: {type: 'number'}
    }
  }