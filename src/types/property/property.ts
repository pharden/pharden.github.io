// I stole this from the spacespot repoe because it looked important




/* eslint-disable prettier/prettier

/**
 * The first line of the address as it would be written on a letter.
 */
export type CommonLine1 = string
/**
 * The second line of the address as it would be written on a letter. For example: building name, number,street name
 */
export type CommonLine2 = string
/**
 * The third line of the address as it would be written on a letter unless Common.Locallity would hold that line.
 */
export type CommonLine3 = string
/**
 * The forth line of the address as it would be written on a letter unless Common.Locallity or Common.Locallity would hold that line.
 */
export type CommonLine4 = string
/**
 * Village,Town, Municipality or City name goes here.
 */
export type CommonLocallity = string
/**
 * State, County, area goes here.
 */
export type CommonRegion = string
/**
 * Zoning goes here.
 */
export type CommonZoning = string
/**
 * Variations of the postal addess by language. Western addresses are displayed: Line1,Line2,Line3,Line4,Locality,Region,Country with the Postcode apearing either at the end or with Locality,Region or Country;  addresses in Asian are displayed: Country,Region Locallity,Line4,Line3,Line2,Line1
 */
export type CommonPostalAddresses = Array<CommonPostalAddress>
/**
 * The Language that this PostalAddress is written in.
 */
export type CommonLanguage = string
/**
 * The most specific part of the address. E.g. the building name or number and street name
 */
export type CommonLine11 = string
/**
 * The second most specific part of the address, e.g. streeet name, or area
 */
export type CommonLine21 = string
/**
 * The third most specific part of the address unless Common.Locallity or Common.Region would hold that line.
 */
export type CommonLine31 = string
/**
 * The third most specific part of the address, unless Common.Locallity or Common.Region would hold that line.
 */
export type CommonLine41 = string
/**
 * Village,Town, Municipality or City name goes here.
 */
export type CommonLocallity1 = string
/**
 * State, County, area goes here.
 */
export type CommonRegion1 = string
/**
 * Zoning goes here.
 */
export type CommonZoning1 = string
/**
 * Address type of this property.
 */
export type CommonAddressType = 'address' | 'suburb'
/**
 * Address type of this property.
 */
export type CommonAddressType1 = 'address' | 'suburb'
/**
 * ISO 3166-1 alpha-2 � two-letter country codes, e.g. GB, US, CA, CN, NL
 */
export type CommonCountry = string
/**
 * Post code, Zip code, Mandatory
 */
export type CommonPostCode = string
export type CommonLine12 = string
export type CommonLine22 = string
export type CommonLine32 = string
export type CommonLine42 = string
export type CommonLocallity2 = string
export type CommonCountry1 = string
export type CommonPostCode1 = string
export type CommonAgencyName = string
export type CommonEmailAddress = string
export type CommonTelephoneNumber = string
export type CommonEmailAddress1 = string
export type CommonAgentName = string
export type CommonTelephoneNumber1 = string
export type CommonWebsite = string
/**
 * Depricated.
 */
export type CommonAgents = Array<CommonAgent>
/**
 * A culture code (locale) e.g. en-GB, es-MX, en-US.
 */
export type CommonCultureCode = string
/**
 * Unicode text matching the CultureCode, no markup allowed.
 */
export type CommonText = string
/**
 * Container of multi lingual text.
 */
export type CommonGroupName = Array<TextForCulture>
/**
 * Contact Group type.
 */
export type CommonGroupType = 'Agency' | 'Brokerage' | 'Team' | 'AreaOffice'
/**
 * The website of the contact group, e.g. Brokerage website.
 */
export type CommonWebsite1 = string
/**
 * An Image file containing the branding of the brokerage
 */
export type CommonAvatar = string
/**
 * The email address.
 */
export type CommonEmailAddress2 = string
/**
 * The name of the Agent.
 */
export type CommonAgentName1 = string
export type CommonTelephoneNumber2 = string
/**
 * a URI to a thumbnail .jpg, .png, .gif of the agents head sholders.
 */
export type CommonAvatar1 = string
/**
 * The title of the Agent.
 */
export type CommonAgentTitle = Array<TextForCulture>
/**
 * The Broker License Number.
 */
export type CommonLicenseNumber = string
/**
 * One or more contact mechanisms to a person or group of people.
 */
export type CommonContacts1 = Array<CommonContacts>
/**
 * The email address.
 */
export type CommonEmailAddress3 = string
/**
 * The name of the Agent.
 */
export type CommonAgentName2 = string
export type CommonTelephoneNumber3 = string
/**
 * a URI to a thumbnail .jpg, .png, .gif of the agents head sholders.
 */
export type CommonAvatar2 = string
/**
 * One or more contact mechanisms to a person or group of people.
 */
export type CommonArrangeViewingContacts1 = Array<CommonArrangeViewingContacts>
/**
 * An aspect of the property.
 */
export type CommonAspect =
  | 'isFurnished'
  | 'isUnfurnished'
  | 'isPartFurnished'
  | 'isFeatured'
  | 'isLetUnderOffer'
  | 'isLetting'
  | 'isNewHome'
  | 'isSale'
  | 'isUnderOffer'
  | 'isLEED'
  | 'isLEED-SILVER'
  | 'isLEED-GOLD'
  | 'isLEED-PLATINUM'
  | 'isBuiltOut'
  | 'isImproved'
  | 'isRaw'
  | 'isDevelopmentOpportunity'
  | 'isByArrangement'
  | 'hasAir-Conditioning-VAV'
  | 'hasAir-Conditioning-VRF'
  | 'hasAir-Conditioning-VRV'
  | 'hasAir-Conditioning'
  | 'hasCabling-Category-5'
  | 'hasCabling-Category-6'
  | 'hasCabling-Fibre-Optic'
  | 'hasCabling-Unspecified-Type'
  | 'hasCarpets-Allowance'
  | 'hasCarpets-Fitted'
  | 'hasCarpets-Fully-Carpeted'
  | 'hasCarpets-Installed'
  | 'hasCarpets-New'
  | 'hasCarpets-Tenants-Improvement'
  | 'hasCarpets-Tiled'
  | 'hasCarpets-Unspecified-Type'
  | 'hasCeiling-Acoustic-Tiled'
  | 'hasCeiling-Exposed'
  | 'hasCeiling-New'
  | 'hasCeiling-Suspended'
  | 'hasCeiling-Suspended-Metal-Tiled'
  | 'hasCeiling-Suspended-Mineral-Fibre'
  | 'hasCeiling-Unspecified-Type'
  | 'hasCentral-Heating-Electric'
  | 'hasCentral-Heating-Gas'
  | 'hasCentral-Heating-Hot-Water-Radiators'
  | 'hasCentral-Heating-Oil-Fired'
  | 'hasCentral-Heating-Unspecified-Type'
  | 'hasFloors-2-Compartment-Under-Floor-Trunking'
  | 'hasFloors-3-Compartment-Under-Floor-Trunking'
  | 'hasFloors-Full-Access-Raised'
  | 'hasFloors-Part-Perimeter-Trunking'
  | 'hasFloors-Part-Raised'
  | 'hasFloors-Part-Under-Floor-Trunking'
  | 'hasFloors-Perimeter-Trunking'
  | 'hasFloors-Raised'
  | 'hasFloors-Raised-100mm-Overall'
  | 'hasFloors-Raised-125mm-Overall'
  | 'hasFloors-Raised-150mm-Overall'
  | 'hasFloors-Raised-170mm-Overall'
  | 'hasFloors-Raised-200mm-Overall'
  | 'hasFloors-Raised-300mm-Overall'
  | 'hasFloors-Raised-450mm-Overall'
  | 'hasFloors-Raised-50mm-Overall'
  | 'hasFloors-Raised-75mm-Overall'
  | 'hasFloors-Solid'
  | 'hasFloors-Timber'
  | 'hasFloors-Under-Floor-Trunking'
  | 'hasHeating-Electric'
  | 'hasHeating-Night-Storage'
  | 'hasHeating-Unspecified-Type'
  | 'hasLighting-450-Lux'
  | 'hasLighting-500-Lux'
  | 'hasLighting-Cat-2'
  | 'hasLighting-Downlighters'
  | 'hasLighting-Fluorescent'
  | 'hasLighting-Good-Natural-Light'
  | 'hasLighting-Integral-Fluorescent-Cat-3'
  | 'hasLighting-Integral-Fluorescent-Cat.2'
  | 'hasLighting-Integral-Fluorescent-Non-Cat.2'
  | 'hasLighting-LG3'
  | 'hasLighting-LG7'
  | 'hasLighting-Natural'
  | 'hasLighting-Poor-Natural-Light'
  | 'hasLighting-Recessed'
  | 'hasLighting-Strip'
  | 'hasLighting-Suspended'
  | 'hasLighting-Uplighters'
  | 'hasLoading-Doors-Dock-Level'
  | 'hasLoading-Doors-Drive-In'
  | 'hasGoodsLift'
  | 'hasReception'
  | 'hasReception-Manned'
  | 'hasAtrium'
  | 'hasBicycleRack'
  | 'hasEscalators'
  | 'hasLift'
  | 'hasWindows-Double-Glazing'
  | 'hasWindows-Metal-Frame'
  | 'hasWindows-Secondary-Glazing'
  | 'hasWindows-Single-Glazed'
  | 'hasWindows-Timber-Frame'
  | 'hasWindows-Triple-Glazed'
  | 'hasWindows-UPVC'
  | 'isStudio'
  | 'isPenthouse'
  | 'hasBalcony'
  | 'hasGarden'
  | 'hasOutbuilding'
  | 'hasParking'
  | 'hasExternalParking'
  | 'hasInternalParking'
  | 'hasSwimmingPool'
  | 'hasLand'
  | 'hasShowers'
  | 'hasTerrace'
  | 'hasSecondaryAccommodation'
  | 'hasTennisCourt'
  | 'hasDoorkeeper'
  | 'hasStaff'
  | 'hasGym'
  | 'isStudentProperty'
  | 'hasFoodService'
  | 'hasCeilingHeight'
  | 'hasConstructionBrickBeam'
  | 'hasCommonArea'
  | 'hasAfterHoursHVACCost'
  | 'hasBOMA'
  | 'hasBOMA-Certified'
  | 'hasBOMA-Bronze'
  | 'hasBOMA-Silver'
  | 'hasBOMA-Gold'
  | 'hasBOMA-Platinum'
  | 'hasConferenceCentre'
  | 'isConnectedToUndergroundNetwork'
  | 'hasFoodService-Cafeteria'
  | 'hasFoodService-Café'
  | 'hasFoodService-OnsiteRestaurant'
  | 'hasGenerator'
  | 'hasGenerator-Life/Safety'
  | 'hasGenerator-TenantUse'
  | 'hasHVACHours'
  | 'isLEED-Certified'
  | 'isLEED-Registered'
  | 'hasSecurity'
  | 'hasSecurity-24hours/7days'
  | 'hasSecurity-AccessCard'
  | 'hasSprinklers'
  | 'hasTransitAccess'
  | 'hasWalkScore'
  | 'isAnchorTenant'
  | 'isBusRoute'
  | 'hasSignage'
  | 'hasConstruction'
  | 'hasConstructionBrick'
  | 'hasConstructionBrickBlock'
  | 'hasConstructionMetalClad'
  | 'hasConstructionPrecast'
  | 'hasCranes'
  | 'hasExcessLand'
  | 'hasFencedYard'
  | 'hasFloorloadCapacity'
  | 'hasColdStorage'
  | 'hasLighting-T5Lighting'
  | 'hasLighting-T8Lighting'
  | 'hasLighting-T12Lighting'
  | 'hasLighting-LED'
  | 'hasLighting-Halogen'
  | 'hasLighting-MetalHalide'
  | 'hasAir-Conditioning-Office'
  | 'hasOutsideStorage'
  | 'hasAir-Conditioning-Plant'
  | 'hasAir-Conditioning-BaseboardGas'
  | 'hasAir-Conditioning-BaseboardOil'
  | 'hasAir-Conditioning-Central'
  | 'hasAir-Conditioning-ForcedAir'
  | 'hasAir-Conditioning-ForcedAir-Electric'
  | 'hasAir-Conditioning-ForcedAir-Gas'
  | 'hasAir-Conditioning-ForcedAir-GasClosed'
  | 'hasAir-Conditioning-ForcedAir-GasOpen'
  | 'hasAir-Conditioning-ForcedAir-OilClosed'
  | 'hasAir-Conditioning-ForcedAir-OilOpen'
  | 'hasAir-Conditioning-ForcedSteam'
  | 'hasAir-Conditioning-Gas'
  | 'hasAir-Conditioning-HeatPump'
  | 'hasAir-Conditioning-HotAirGas'
  | 'hasAir-Conditioning-HotWater-Electric'
  | 'hasAir-Conditioning-HotWater-Gas'
  | 'hasAir-Conditioning-HotWater-Oil'
  | 'hasAir-Conditioning-HotWater-Open'
  | 'hasAir-Conditioning-HVACUnit'
  | 'hasAir-Conditioning-NotHeated'
  | 'hasAir-Conditioning-OverheadUnit'
  | 'hasAir-Conditioning-Perimeter'
  | 'hasAir-Conditioning-Radiant'
  | 'hasAir-Conditioning-RadiantSteam'
  | 'hasAir-Conditioning-RadiantWater'
  | 'hasAir-Conditioning-Steam'
  | 'hasAir-Conditioning-VariableAirVolume'
  | 'hasAir-Conditioning-PrimaryHVAC'
  | 'PrimaryHVAC-BaseboardElectric'
  | 'hasRailAccess'
  | 'hasSchoolTax'
  | 'hasSprinklers-Standard'
  | 'hasSprinklers-ESFR'
  | 'hasSprinklers-High-Density'
  | 'hasParkingTrailer'
  | 'hasParkingTruck'
  | 'hasDevelopmentChargesPaid'
  | 'hasDevelopmentChargesPaid-Partial'
  | 'hasPropertyCode'
  | 'hasPropertyCode-VacantLand'
  | 'isServiced'
  | 'isServicedAvailable'
  | 'isServicedPartial'
  | 'hasSewersSanitary'
  | 'hasSewersSanitaryStorm'
  | 'hasSewersSeptic'
  | 'hasSewersStorm'
  | 'hasUtilities'
  | 'hasWater'
  | 'hasWaterMunicipal'
  | 'hasWaterWell'
  | 'hasFreightElevator'
  | 'hasPassengerElevator'
  | 'hasElevators'
  | 'isSaleAgreed'
  | 'isSold'
  | 'isLeased'
  | 'isLuxuryApartment'
  | 'has24HourAccess'
  | 'hasBreakoutSpace'
  | 'hasRoofTerrace'
  | 'hasWheelchairAccess'
  | 'hasTeaCoffee'
  | 'hasFreeMeetingRooms'
  | 'hasCleaning'
  | 'hasHotdesks'
  | 'hasFixeddesks'
  | 'hasServicedOffices'
  | 'hasChildrensPlayArea'
  | 'hasAccessControl'
  | 'hasStorageArchives'
  | 'hasWheelchairAccessToilets'
  | 'hasBarCafeteria'
  | 'hasBusinessLounge'
  | 'hasCoworkingArea'
/**
 * Zero or more aspects of the property.
 */
export type CommonAspects = Array<CommonAspect>
/**
 * The date the the property is available to be occupied.
 */
export type CommonAvailableFrom = string
/**
 * The kind of the availability, e.g AvailableSoon.
 */
export type CommonAvailabilityKind =
  | 'AvailableNow'
  | 'AvailableNeg'
  | 'AvailableSoon'
  | 'AvailableFromKnownDate'
  | 'AvailableFromKnownQtr'
  | 'AvailableNMonthsAfterLeaseOrSale'
/**
 * The Availability description for a property, e.g AvailableSoon.
 */
export type CommonAvailableOnDescription = string
/**
 * The date when the property will be availble for occupation, if AvailableFromKnownQtr then must be first day of quater.
 */
export type CommonAvailabilityDate = string
/**
 * A number of months after lease or sale agreen when property will be free for occupation by customer.
 */
export type CommonMonthsAfterLeaseOrSale = number
/**
 * The URI to the resource.
 */
export type CommonUri = string
/**
 * A culture code (locale) e.g. en-GB, es-MX, en-US.
 */
export type CommonCulture = string
/**
 * A link is external link or not
 */
export type CommonUriExternal = boolean
/**
 * Name of Brochure if Common.UriExternal is true.
 */
export type CommonBrochureName = string
/**
 * Zero or more Common.ResourceForCulture objects.
 */
export type CommonBrochures = Array<CommonResourceForCultureType>
/**
 * May only contain values specified in the Common.ChargeKind reference data set.
 */
export type CommonChargeKind =
  | 'SalePrice'
  | 'Rent'
  | 'BusinessRates'
  | 'ServiceCharge'
  | 'EstateCharge'
  | 'OperatingCost'
  | 'ExternalParkingSpaceCost'
  | 'InternaParkingSpaceCost'
  | 'BrokerageFees'
  | 'Deposit'
  | 'AdditionalRent'
  | 'NetRent'
  | 'FlexRent'
/**
 * A three character currency code as defined by ISO 4217
 */
export type CommonCurrencyCode = string
/**
 * Defined as a reference data set. Inclides: Once, Weekly, Monthly and Annually.
 */
export type CommonInterval = 'Once' | 'Weekly' | 'Monthly' | 'Annually'
/**
 * An ammount of the currency specified.
 */
export type CommonAmount = number
/**
 * What the Common.Amount field holds, if absent a default (backard compatible) value of 'Value' will be assumed.
 */
export type CommonAmountKind = 'Value' | 'Percentage' | 'Multiplier'
/**
 * Which calendar year e.g. 2014 that was used to estimate or bases the charage.
 */
export type CommonYear = number
/**
 * The multipler based on some measure.
 */
export type CommonPerUnit =
  | 'Whole'
  | 'sqm'
  | 'sqft'
  | 'hectare'
  | 'acre'
  | 'unit'
  | 'pp'
/**
 * May only contain values specified in the Common.SizeKind reference data set.
 */
export type CommonTaxModifer =
  | 'None'
  | 'PlusVAT'
  | 'PlusSalesTax'
  | 'IncludingVAT'
  | 'IncludingSalesTax'
/**
 * May only contain values specified in the Common.Paidby reference data set.
 */
export type CommonPaidByPurchaser = string
/**
 * If this charge will depend on another value then this field must be specifed.
 */
export type CommonDependentCharge = 'SalePrice' | 'Rent'
/**
 * various modifiers are supported such as offers over, price on application etc.
 */
export type CommonChargeModifer =
  | 'Statuatory'
  | 'Asking'
  | 'OnApplication'
  | 'Guide'
  | 'From'
  | 'To'
  | 'OffersInExcessOf'
  | 'Fixed'
  | 'ReducedTo'
  | 'CallForInfo'
  | 'Estimated'
  | 'PriceIsNegotiable'
  | 'PriceOnListing'
  | 'Auction'
  | 'DeadlineSale'
  | 'ExpressionsOfInterest'
  | 'Outgoings'
  | 'PrivateTreaty'
  | 'Tender'
  | 'ContactAgent'
/**
 * will be depricated in next release, should stil be supplied.
 */
export type CommonOnApplication = boolean
/**
 * will be depricated in next release, should stil be supplied.
 */
export type CommonExact = boolean
/**
 * An array of changes may be empty.
 */
export type CommonCharges = Array<CommonChargeType>
/**
 * The Latitude of the property.
 */
export type Lat = number
/**
 * The Longitude of the property
 */
export type Lon = number
/**
 * One geometry as defined by GeoJSON
 */
export type GeoJsonGeometry =
  | Point
  | MultiPoint
  | LineString
  | MultiLineString
  | Polygon
  | MultiPolygon
/**
 * A single position
 */
export type Position = [number, number]
/**
 * An array of positions
 */
export type PositionArray = Array<Position>
/**
 * An array of two or more positions
 */
export type LineString1 = PositionArray & {
  [k: string]: any
}
/**
 * An array of four positions where the first equals the last
 */
export type LinearRing = PositionArray & {
  [k: string]: any
}
/**
 * An array of linear rings
 */
export type Polygon1 = Array<LinearRing>
/**
 * True if the Common.Location is either a point within the land area of the property or a polygon describing the bountry of the area of the property. False if the location may not match the actual area od the property.
 */
export type CommonExact1 = boolean
/**
 * The time the record was first imported into Information store
 */
export type CommonCreated = string
/**
 * May only contain values specified in the Common.SizeKind reference data set.
 */
export type CommonSizeKind =
  | 'MinimumSize'
  | 'MaximumSize'
  | 'TotalSize'
  | 'LandSize'
  | 'SalesArea'
  | 'OfficeArea'
  | 'StorageArea'
  | 'LoadingBayArea'
  | 'FrontageWidth'
  | 'SalesWidth'
  | 'GrossFrontageWidth'
  | 'NetFrontageWidth'
  | 'ShopDepth'
  | 'BuiltDepth'
  | 'ReturnFrontageWidth'
  | 'UnitSize'
  | 'TotalBuildingSize'
  | 'FrontageSize'
  | 'LotFrontSize'
  | 'LotDepthSize'
  | 'BuildableSize'
  | 'IndustrialSize'
  | 'OfficeSize'
  | 'MezzanineSize'
  | 'TypicalFloorSize'
  | 'RetailSize'
  | 'WarehouseSize'
  | 'Other'
  | 'HardStandSize'
  | 'ShowroomSize'
  | 'MinimumCeilingHeight'
  | 'MaximumCeilingHeight'
/**
 * A generic specifier of dimension of a space or lenght within a property.
 */
export type CommonDimensions = [
  CommonDimensionType,
  ...Array<CommonDimensionType>,
]
/**
 * Defined as a reference data set that specifies the unit of measurement.
 */
export type CommonUnits =
  | 'sqft'
  | 'sqm'
  | 'hectare'
  | 'acre'
  | 'ft'
  | 'yd'
  | 'm'
  | 'pp'
/**
 * The ammount of the unit, 1.5 hours
 */
export type CommonAmount1 = number
/**
 * Zero or more sizes of the property Can be lengths or areas.
 */
export type CommonSizes = Array<Size>
/**
 * The caption of the image, usually the source system identifier of the imagee.
 */
export type CommonImageCaption = string
/**
 * The order in which the images will display
 */
export type CommonOrder = number
/**
 * Indication of adding a watermark to images
 */
export type CommonAddWatermark = boolean
/**
 * One or more renditions of the image with different resolutions.
 */
export type CommonImageResources = [ImageResource, ...Array<ImageResource>]
/**
 * The height in pixels of the image.
 */
export type CommonImageHeight = number
/**
 * The Uri to the image resource.
 */
export type CommonResourceUri = string
/**
 * The width in pixels of the image.
 */
export type CommonImageWidth = number
/**
 * The responsive breakpoint that should use this rendition.
 */
export type CommonBreakpoint = 'small' | 'medium' | 'large' | 'original'
/**
 * The Uri to the image resource that was used to create this resized image resource.
 */
export type SourceUri = string
/**
 * Zero or more Images.
 */
export type CommonFloorPlans = Array<CommonImage>
/**
 * A culture code (locale) e.g. en-GB, es-MX, en-US.
 */
export type CommonCultureCode1 = string
/**
 * Unicode text matching the CultureCode, no markup allowed.
 */
export type CommonText1 = string
/**
 * To display The unit name.
 */
export type CommonUnitDisplayName = string
/**
 * Container of multi lingual text...
 */
export type CommonSubdivisionName = Array<TextForCulture1>
/**
 * A generic specifier of area, includes both Units and quantity.
 */
export type CommonAreas = [CommonAreaType, ...Array<CommonAreaType>]
/**
 * Defined as a reference data set that specifies the unit of measurement.
 */
export type CommonUnits1 = 'sqft' | 'sqm' | 'hectare' | 'acre' | 'pp'
/**
 * The ammount of the unit, e.g. 100 square metres.
 */
export type CommonArea = number
/**
 * The ammount of the unit, e.g. 100 square metres.
 */
export type CommonMinArea = number
/**
 * The ammount of the unit, e.g. 100 square metres.
 */
export type CommonMaxArea = number
/**
 * The status of this floor or units, i.e is it still on the market, not released yet, withdrawn etc.
 */
export type CommonUnitStatus =
  | 'Available'
  | 'UnderOffer'
  | 'Pending'
  | 'Let'
  | 'UnderOption'
  | 'Withdrawn'
/**
 * What can this floor or unit be used for, e.g Reception, Office, Showroom, Storage.
 */
export type CommonUnitUse =
  | 'AncillarySpace'
  | 'Atrium'
  | 'BankingHall'
  | 'CanteenRest'
  | 'CarParkingArea'
  | 'CleanRoomsLabs'
  | 'ColdChilledStores'
  | 'CommunityPowerCenter'
  | 'ComputerUse'
  | 'ConferenceHall'
  | 'Datacentre'
  | 'Development'
  | 'Distribution'
  | 'Education'
  | 'FreeStanding'
  | 'Gymnasium'
  | 'HighTech'
  | 'Hotel'
  | 'Industrial'
  | 'IndustrialOffices'
  | 'IndustrialRenewal'
  | 'Laboratory'
  | 'Land'
  | 'Leisure'
  | 'LifestyleCenters'
  | 'Logistics'
  | 'Manufacturing'
  | 'Medical'
  | 'Mezzanine'
  | 'MixedUse'
  | 'Mixed-use'
  | 'MultiUse'
  | 'NonSales'
  | 'NursingHome'
  | 'Office'
  | 'OfficeFittedFurnished'
  | 'OfficeRenewal'
  | 'OpenStorage'
  | 'OutletCenter'
  | 'PlantServices'
  | 'PublicHouse'
  | 'Reception'
  | 'ReceptionArea'
  | 'RegionalSuperRegionalMall'
  | 'ResearchDevelopment'
  | 'Residential'
  | 'Restaurant'
  | 'Retail'
  | 'RetailAncillary'
  | 'RetailGround'
  | 'RetailPad'
  | 'RetailWarehouse'
  | 'RoofTerrace'
  | 'Sales'
  | 'ServicedOffice'
  | 'ShellCore'
  | 'Shop'
  | 'ShoppingCentre'
  | 'Showroom'
  | 'Site'
  | 'Storage'
  | 'StreetRetailUrbanStorefront'
  | 'StripCenter'
  | 'Studio'
  | 'Supermarket'
  | 'TechnicalUse'
  | 'TrainingCentre'
  | 'Vault'
  | 'VehicleRelated'
  | 'Warehouse'
  | 'WarehouseOffices'
  | 'WorkshopStorage'
  | 'WorkshopWorkroom'
  | 'Other'
  | 'AutomotivePartsAndAccessoriesAndTires'
  | 'BeerAndWineAndLiquor'
  | 'BuildingMaterialAndGardenEquipmentAndSuppliesDealers'
  | 'CarDealership'
  | 'Clothing'
  | 'Convenience'
  | 'DepartmentStore'
  | 'ElectronicsAndAppliance'
  | 'FurnitureAndHomeFurnishings'
  | 'GasolineStations'
  | 'HealthAndPersonalCare'
  | 'JewelleryAndLuggageAndLeatherGoods'
  | 'MiscellaneousStoreRetailers'
  | 'OtherGeneralMerchandise'
  | 'Shoes'
  | 'SpecialtyFood'
  | 'SportingGoodsAndHobbyAndBookAndMusic'
  | 'SupermarketsAndOtherGroceryOrExceptConvenience'
  | 'GreySpace'
  | 'HotDesk'
  | 'FixedDesk'
/**
 * The status of this floor or units, i.e is it Vacant , Occupied or Unknown
 */
export type CommonVacancy = 'Unknown' | 'Occupied' | 'Vacant'
/**
 * If the area of this floor is approximate.
 */
export type CommonApproxArea = boolean
/**
 * The date the the floor or unit is available to be occupied.
 */
export type CommonAvailableFrom1 = string
/**
 * An array of changes may be empty.
 */
export type CommonCharges1 = Array<CommonChargeType>
/**
 * Container of multi lingual text.
 */
export type CommonSpaceDescription = Array<TextForCulture>
/**
 * The property lease type.
 */
export type CommonLeaseTypes =
  | 'Assignment'
  | 'GroundLease'
  | 'HeadLease'
  | 'Licence'
  | 'New'
  | 'OccupationalLease'
  | 'SubLease'
  | 'Unknown'
  | 'Freehold'
  | 'LeaseHold'
  | 'LongLeaseHold'
  | 'LongLet'
/**
 * A URI to a 3D walkthrough. http://www.virtualwalkthrough.com/
 */
export type CommonUnitWalkthrough = string
/**
 * Zero or more Common.ResourceForCulture objects.
 */
export type CommonBrochures1 = Array<CommonResourceForCultureType>
/**
 * Zero or more Images.
 */
export type CommonFloorPlans1 = Array<CommonImage>
/**
 * Zero or more Images.
 */
export type CommonPhotos = Array<CommonImage>
/**
 * Zero or more Floors and Units structures.
 */
export type CommonFloorsAndUnits = Array<CommonFloorsAndUnit>
/**
 * Container of multi lingual text.
 */
export type CommonHighlight1 = Array<TextForCulture>
/**
 * An array of highlights.
 */
export type CommonHighlights = Array<CommonHighlight>
/**
 * The Country/Market site that directly owns this property listings. This is the site code e.g.'uk-resi
 */
export type CommonHomeSite = string
/**
 * A generic specifier of area, includes both Units and quantity.
 */
export type CommonLandSize = [CommonAreaType, ...Array<CommonAreaType>]
/**
 * The time and date when the record was last changed in the search index
 */
export type CommonLastProcessed = string
/**
 * The time and date when the record was last changed in the information store
 */
export type CommonLastUpdated = string
/**
 * The time and date when the record was last changed in the source system
 */
export type CommonSourceLastupdated = string
/**
 * A lease type.
 */
export type Lease =
  | 'Assignment'
  | 'GroundLease'
  | 'HeadLease'
  | 'Licence'
  | 'New'
  | 'OccupationalLease'
  | 'SubLease'
  | 'Unknown'
  | 'Freehold'
  | 'LeaseHold'
  | 'LongLeaseHold'
  | 'LongLet'
/**
 * Zero or more lease types.
 */
export type CommonLeaseTypes1 = Array<Lease>
/**
 * A culture code (locale) e.g. en-GB, es-MX, en-US.
 */
export type CommonCultureCode2 = string
/**
 * Unicode text matching the CultureCode, no markup allowed.
 */
export type CommonText2 = string
export type CommonLongDescription = Array<TextForCulture2>
/**
 * A generic specifier of area, includes both Units and quantity.
 */
export type CommonMaximumSize = [CommonAreaType, ...Array<CommonAreaType>]
/**
 * A generic specifier of area, includes both Units and quantity.
 */
export type CommonMinimumSize = [CommonAreaType, ...Array<CommonAreaType>]
/**
 * The number of listing when a building is pushed from canada office.
 */
export type CommonListingCount = number
/**
 * The number of Storeys of a building/Listing.
 */
export type CommonNumberOfStoreys = number
/**
 * Year built information for a property
 */
export type CommonYearBuilt = number
/**
 * Value is true when building is pushed from canada office
 */
export type CommonIsParent = boolean
/**
 * The number of bedrooms in the property. Should be omitted for non residential properties.
 */
export type CommonNumberOfBedrooms = number
/**
 * Zero or more Images.
 */
export type CommonPhotos1 = Array<CommonImage>
/**
 * The key will have the followng form $CountryCode-$SystemCode-$SytemKey. e.g. 'GB-Plus-27874', 'GB-ReapIT-CAR150038' Note that the country code is the country that is running the System which may not be the country where the property exists. For example a Chinese installationb of Plus might list a property that exists in London, the Primary key for that PropertyListing would start with 'CN_Plus_'.
 */
export type CommonPrimaryKey = string
/**
 * The kind of property that is being listed, multivalued, depricated in favour of Common.PropertySubType
 */
export type CommonPropertyTypes = [
  CommonPropertyType,
  ...Array<CommonPropertyType>,
]
/**
 * A PropertyType
 */
export type CommonPropertyType =
  | 'Apartment'
  | 'House'
  | 'Office'
  | 'Warehouse'
  | 'Retail'
  | 'Industrial'
  | 'Logistics'
  | 'Land'
  | 'Other'
  | 'LeisureAndPubs'
  | 'AlternativePlus'
  | 'Villa'
/**
 * A list of sites that this propertylisting must NOT be listed on e.g. 'ie-comm
 */
export type CommonRestrictedSites = [
  CommonRestrictedSite,
  ...Array<CommonRestrictedSite>,
]
/**
 * A site name e.g. 'uk-resi
 */
export type CommonRestrictedSite = string
/**
 * Container of multi lingual text.
 */
export type CommonStrapline = Array<TextForCulture>
/**
 * A generic specifier of area, includes both Units and quantity.
 */
export type CommonTotalSize = [CommonAreaType, ...Array<CommonAreaType>]
/**
 * Zero or more Common.ResourceForCulture objects.
 */
export type CommonEnergyPerformanceInformation = Array<
  CommonResourceForCultureType
>
/**
 * The Uri to a UK Energy Performace Certificate.
 */
export type UnitedKingdomEnergyPerformanceCertificateUri = string
/**
 * The type of the German Energy Performance Certificate (one value from reference data set for German.EnergyPerformanceCertificateType).
 */
export type GermanyEnergyPerformanceCertificateType =
  | 'RequirementCertificate'
  | 'ConsumptionCertificate'
  | 'PerformanceCertificate'
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'A+'
  | 'A++'
  | 'G'
/**
 * The Uri to a German Energy Performace Certificate.
 */
export type GermanyEnergyPerformanceCertificateUri = string
/**
 * The date when the certificate expires.
 */
export type GermanyEnergyPerformanceCertificateExpires = string
/**
 * The year the building was constructed.
 */
export type GermanyConstructionYear = number
/**
 * A major energy source for the property.
 */
export type GermanyMajorEnergySource =
  | 'BioEnergy'
  | 'LightGas'
  | 'HeavyGas'
  | 'GeoThermal'
  | 'DistrictHeating'
  | 'DistrictHeatingSteam'
  | 'LiquidGas'
  | 'Gas'
  | 'Wood'
  | 'WoodChips'
  | 'WoodPellets'
  | 'NoInformation'
  | 'Coal'
  | 'CoalCoke'
  | 'CombindHeatAndPowerBioEnergy'
  | 'CombindHeatAndPowerRenewableEnergy'
  | 'CombindHeatAndPowerFossilFuels'
  | 'CombindHeatAndPowerRegenerativeEnergy'
  | 'LocalHeating'
  | 'Oil'
  | 'SolarHeating'
  | 'Electricity'
  | 'EnvironmentalThermalEnergy'
  | 'HeatSupply'
  | 'HydroEnergy'
  | 'WindEnergy'
  | 'CentralHeating'
/**
 * Zero or more major energy sources.
 */
export type GermanyMajorEnergySources = Array<GermanyMajorEnergySource>
/**
 * A generic specifier power usage, includes both Units and quantity.
 */
export type GermanyTotalEnergy = [CommonPowerType, ...Array<CommonPowerType>]
/**
 * Defined as a reference data set that specifies the unit of measurement.
 */
export type CommonEnergyUnits = 'kj' | 'kwh' | 'btu' | 'j'
/**
 * The ammount of the unit, e.g. 100 kwh.
 */
export type CommonAmount2 = number
/**
 * Defined as a reference data set. Inclides: Once, Weekly, Monthly and Annually.
 */
export type CommonInterval1 = 'Once' | 'Weekly' | 'Monthly' | 'Annually'
/**
 * The multipler based on some measure.
 */
export type CommonInterval2 =
  | 'Whole'
  | 'sqm'
  | 'sqft'
  | 'hectare'
  | 'acre'
  | 'unit'
  | 'pp'
/**
 * A generic specifier power usage, includes both Units and quantity.
 */
export type GermanyHeatEnergy = [CommonPowerType, ...Array<CommonPowerType>]
/**
 * A generic specifier power usage, includes both Units and quantity.
 */
export type GermanyElectricalEnergy = [
  CommonPowerType,
  ...Array<CommonPowerType>,
]
/**
 * The Major usage class of this property.
 */
export type CommonUsageType =
  | 'Commercial'
  | 'Residential'
  | 'Retail'
  | 'Office'
  | 'Industrial'
  | 'DataCentre'
  | 'Hotels'
  | 'Agriculture'
  | 'PetroleumAutomotive'
  | 'Land'
  | 'Healthcare'
  | 'Investment'
  | 'LifeSciences'
  | 'SpecialPurpose'
  | 'AncillarySpace'
  | 'ColdChilledStores'
  | 'Logistics'
  | 'OpenStorage'
  | 'Site'
  | 'Religious'
  | 'IndoorRecreational'
  | 'OutdoorRecreational'
  | 'Pubs'
  | 'Restaurants'
  | 'Leisure'
  | 'DevelopmentLand'
  | 'HotelsAndLicensed'
  | 'Education&Culture'
  | 'FlexOffice'
  | 'ShowroomsBulkyGoods'
/**
 * The URI to a website for this property listing.
 */
export type CommonWebsite2 = string
/**
 * A URI to a 3D walkthrough. http://www.virtualwalkthrough.com/
 */
export type CommonWalkthrough = string
/**
 * The key will have the followng form $CountryCode-$SystemCode-$SytemKey. e.g. 'GB-Plus-27874', 'GB-ReapIT-CAR150038' Note that the country code is the country that is running the System which may not be the country where the property exists. For example a Chinese installationb of Plus might list a property that exists in London, the Primary key for that PropertyListing would start with 'CN_Plus_'.
 */
export type CommonParentProperty = string
/**
 * Depricated (now part of Common.Charges) Indicatges if Vat is payable over and above specified price.
 */
export type UnitedKingdomVATPayable = boolean
/**
 * One or more use classes like 'A' or 'A1' as specified in https://www.gva.co.uk/planning/use-class-order
 */
export type UnitedKingdomUseClass1 = [
  UnitedKingdomUseClass,
  ...Array<UnitedKingdomUseClass>,
]
/**
 * A UnitedKingdom UseClass, e.g. 'A1
 */
export type UnitedKingdomUseClass =
  | 'A'
  | 'A1'
  | 'A2'
  | 'A3'
  | 'A4'
  | 'A5'
  | 'B'
  | 'B1'
  | 'B2'
  | 'B8'
  | 'C'
  | 'C1'
  | 'C2'
  | 'C2A'
  | 'C3'
  | 'C3A'
  | 'C3B'
  | 'C3C'
  | 'C4'
  | 'D'
  | 'D1'
  | 'D2'
  | 'SuiGeneris'
  | 'OtherAgricultural'
/**
 * One or more use classes like 'A' or 'A1' as specified in https://www.gva.co.uk/planning/use-class-order
 */
export type CanadaUseClass = [string, ...Array<string>]
/**
 * The date when the contract started.
 */
export type LeaseContractStartDate = string
/**
 * The date when the contract ends.
 */
export type LeaseContractEndDate = string
/**
 * The date when the (next) contract break occurs.
 */
export type LeaseRentNextReviewDate = string
/**
 * The number of years between each rent review.
 */
export type CommonLeaseRentReviewCycle = number
/**
 * The date when the next rent review occurs.
 */
export type LeaseRentNextReviewDate1 = string
/**
 * 100 times the Percentage rate value for the area of the property.
 */
export type UnitedKingdomRateInThePound = number
/**
 * The notional value of the property for UK business rates calculations.
 */
export type UnitedKingdomRateableValuePounds = number
/**
 * The number of loading docks (where the floor level matches the trailer level).
 */
export type IndustrialLoadingDocks = number
/**
 * The unit of loading docks.
 */
export type IndustrialLoadingDocksUnit = 'ft' | 'm'
/**
 * Doors from the warehouse/storage/manufacturing space to othe outside.
 */
export type IndustrialLoadingDoors = number
/**
 * Container of multi lingual text.
 */
export type IndustrialLocationDescription = Array<TextForCulture>
/**
 * Zero or more points of interest is a place/thing some distance from the property.
 */
export type IndustrialPointsOfInterestType = [
  CommonPointOfInterestType,
  ...Array<CommonPointOfInterestType>,
]
/**
 * Defined as a reference data set that specifies the unit of measurement.
 */
export type CommonInterestKind = 'Amenity' | 'Place'
/**
 * Container of multi lingual text.
 */
export type CommonNamesOfPlaces = Array<TextForCulture>
/**
 * A generic specifier of distances from the property to a place.
 */
export type CommonDistances = [CommonDistanceType, ...Array<CommonDistanceType>]
/**
 * Defined as a reference data set that specifies the unit of measurement.
 */
export type CommonDistanceUnits =
  | 'minute'
  | 'hour'
  | 'metre'
  | 'yard'
  | 'kilometre'
  | 'mile'
/**
 * The ammount of the unit, 1.5 hours
 */
export type CommonAmount3 = number
/**
 * The number of parking spaces within the building stucture.
 */
export type CommonInternalParkingSpaces = number
/**
 * The number of parking spaces available outside.
 */
export type CommonExternalParkingSpaces = number
/**
 * The sub type of the property within the specificed Sector. E.g. House, Apartment, Shop, Supermarket
 */
export type PropertySubType =
  | 'Park'
  | 'House'
  | 'Apartment'
  | 'PrimeLocation'
  | 'District'
  | 'ShoppingCentre'
  | 'Tier-1'
  | 'Tier-2'
  | 'Tier-3'
  | 'Tier-4'
  | 'Traditional'
  | 'Co-working'
  | 'Creative'
  | 'OpenPlan'
  | 'OfficeBuilding'
  | 'HighRise'
  | 'MidRise'
  | 'Laboratory'
  | 'MedicalOffice'
  | 'Executive'
  | 'BarPub'
  | 'Unknown'
  | 'Hotel'
  | 'Land'
  | 'NursingHome'
  | 'Restaurant'
  | 'Shop'
  | 'HighStreet'
  | 'Supermarket'
  | 'PowerCenter'
  | 'StipCenter'
  | 'OutletCenter'
  | 'RegionalCenter'
  | 'MixedUse'
  | 'RetailPad'
  | 'VehicleRelated'
  | 'TrainingCentre'
  | 'Warehouse'
  | 'LightIndustrial'
  | 'Manufacturing'
  | 'ColdStorage'
  | 'Terminal'
  | 'CarDealership'
  | 'CarPark'
  | 'PetrolFillingStation'
  | 'RoadsideRetail'
  | 'Workshop'
  | 'RetailLand'
  | 'OfficeLand'
  | 'RetailPadLand'
  | 'ResidentialLand'
  | 'IndustrialLand'
  | 'CommercialLand'
  | 'Singlefamily'
  | 'SinglefamilyMobile'
  | 'Duplex'
  | 'MultifamilyLow-Rise'
  | 'MultifamilyMid-Rise'
  | 'MultifamilyHigh-Rise'
  | 'StudentHousing'
  | 'VacationHome/Cottage'
  | 'Placeofworship'
  | 'Cemetery'
  | 'School'
  | 'CommunityCenter'
  | 'Museum/ArtGallery'
  | 'Library'
  | 'PerformingArts/Theatre'
  | 'Hospital'
  | 'SeniorHousing'
  | 'MedicalBuilding'
  | 'SeniorHousing-IndependentLiving'
  | 'SeniorHousing-AssistedLiving'
  | 'SeniorHousing-LongTermCare'
  | 'SeniorHousing-MemoryCare'
  | 'Hotel-FullService'
  | 'Hotel-LimitedService'
  | 'Hotel-FocusedService'
  | 'Hotel-ExtendedStay'
  | 'Resort'
  | 'Motel'
  | 'Inns'
  | 'SkiResort'
  | 'TouristHomes/B&amp;'
  | 'BowlingAlley'
  | 'Fitness'
  | 'SkatingRink'
  | 'GolfCourse'
  | 'Marina'
  | 'Converted'
  | 'HighTech'
  | 'Institutional'
  | 'CommunityOrNeighbourhood'
  | 'NeighbourhoodCentre'
  | 'OutletCentre'
  | 'PowerCentre'
  | 'RegionalCentre'
  | 'Recreation'
  | 'Religious'
  | 'Streetfront'
  | 'Crossdock'
  | 'DeadStorage'
  | 'FoodProcessing'
  | 'Industrial'
  | 'Transportation'
  | 'TruckRepairFacility'
  | 'TruckTerminal'
  | 'WarehouseOrDistribution'
  | 'Agricultural'
  | 'HighDensityResidential'
  | 'LowDensityResidential'
  | 'MediumDensityResidential'
  | 'Freehold'
  | 'Leasehold'
  | 'Nightclubs'
  | 'Cinemas'
  | 'HealthClubs'
  | 'Gaming'
  | 'Bowling'
  | 'ChildrenPlay'
  | 'Alternative'
  | 'CountryPubs'
  | 'DublinPubs'
  | 'Hotels'
  | 'Aviation'
  | 'Bank'
  | 'ConventionFacilities'
  | 'DataCenter'
  | 'DisasterRecovery'
  | 'Garden'
  | 'GovernmentPublicUse'
  | 'LifestyleCenter'
  | 'OperationsCenter'
  | 'PortFacility'
  | 'PostalFacility'
  | 'Research'
  | 'Rooftop'
  | 'SelfStorage'
  | 'SpecialtyCenter'
  | 'SubsidizedHousing'
  | 'SuperRegionalCenter'
  | 'Telecom'
  | 'Townhouse'
  | 'Cropping'
  | 'Dairy'
  | 'Farmlet'
  | 'Forestry'
  | 'Horticulture'
  | 'Livestock'
  | 'MixedFarming'
  | 'TouristHomes/B&B'
  | 'Viticulture'
  | 'ShowroomsBulkyGoods'
/**
 * This will have an allowed status of PendingCompletion when all floors are under Offer / pending For Completion
 */
export type CommonStatus = string
export type CommonRatio = number
export type CommonRatioPer = number
export type CommonRatioPerUnit = 'sqft' | 'sqm' | 'hectare' | 'acre'
export type CommonParkingType =
  | 'CarParking'
  | 'Covered'
  | 'CoveredCanopy'
  | 'CoveredEnergized'
  | 'CoveredGarage'
  | 'CoveredRandom'
  | 'CoveredReserved'
  | 'CoveredUnreserved'
  | 'CoveredUnreservedEnergized'
  | 'Garage'
  | 'IncludedInRent'
  | 'None'
  | 'OnSiteParking'
  | 'Surface'
  | 'SurfaceEnergized'
  | 'SurfaceRandom'
  | 'SurfaceRandomEnergized'
  | 'SurfaceReserved'
  | 'SurfaceReservedEnergized'
  | 'SurfaceTandem'
  | 'SurfaceUnreserved'
  | 'SurfaceUnreservedEnergized'
  | 'TrailerParking'
  | 'Underground'
  | 'UndergroundRandom'
  | 'UndergroundReserved'
  | 'UndergroundTandem'
  | 'UndergroundUnreserved'
  | 'Visitor'
/**
 * T
 */
export type CommonParkingSpace = number
export type CommonAmount4 = number
/**
 * T
 */
export type CommonInterval3 = 'Once' | 'Weekly' | 'Monthly' | 'Annually'
export type CommonCurrencyCode1 = string
export type CommonParkingCharge1 = Array<CommonParkingCharge>
export type CommonParkingDetails1 = Array<CommonParkingDetails>
/**
 * Tenancy for a property
 */
export type CommonTenancy = 'MultiTenant' | 'Open' | 'SingleTenant' | 'Unknown'
/**
 * A culture code (locale) e.g. en-GB, es-MX, en-US.
 */
export type CommonCultureCode3 = string
/**
 * Unicode text matching the CultureCode, no markup allowed.
 */
export type CommonText3 = string
export type CommonComments = Array<TextForCulture3>
/**
 * Listing sequence for a property
 */
export type ListingOrder = number
/**
 * The number of Lots of a building/Listing.
 */
export type CommonNumberOfLots = number
export type CommonLink = string
export type CommonCultureCode4 = string
export type CommonVideoDescription = string
export type VideoLinks = Array<AddVideo>
export type CommonBuildingOperator = string
export type CommonBuildingOperatorID = string
/**
 * For Flex Listing, If there is a traditional office availability in the same building, then the A365 primary key for that availability should be sent
 */
export type CommonRelatedListingOffice = string
/**
 * Portfolio name of the property.
 */
export type CommonPortfolios = string
/**
 * Zero or more Portfolios of the property.
 */
export type CommonPortfolios1 = Array<CommonPortfolios>
/**
 * SaleAuthority for a property
 */
export type CommonSaleAuthority =
  | 'auction'
  | 'eoi'
  | 'forsale'
  | 'offers'
  | 'sale'
  | 'tender'
  | 'exclusive'
  | 'multilist'
  | 'conjunctional'
  | 'open'
  | 'setsale'

/**
 * A virtual container for the PropertyListing. Actual containers will include CUD messages, and Elastic Search documents.
 */
export interface Root {
  PropertyListing: PropertyListing
}
/**
 * The PropertyListing entity. This object holds details of a Property that is listed by CBRE
 */
export interface PropertyListing {
  'Common.ActualAddress': CommonActualAddress
  'Common.Agency'?: CommonAgency
  'Common.Agents'?: CommonAgents
  'Common.ContactGroup': CommonContactGroup
  'Common.Aspects'?: CommonAspects
  'Common.AvailableFrom'?: CommonAvailableFrom
  'Common.Availability'?: CommonAvailability
  'Common.Brochures'?: CommonBrochures
  'Common.Charges'?: CommonCharges
  'Common.Coordinate': CommonCoordinate
  'Common.GeoLocation'?: CommonGeoLocation
  'Common.Created'?: CommonCreated
  'Common.Sizes'?: CommonSizes
  'Common.FloorPlans'?: CommonFloorPlans
  'Common.FloorsAndUnits'?: CommonFloorsAndUnits
  'Common.Highlights'?: CommonHighlights
  'Common.HomeSite': CommonHomeSite
  'Common.LandSize'?: CommonLandSize
  'Common.LastProcessed'?: CommonLastProcessed
  'Common.LastUpdated'?: CommonLastUpdated
  'Common.SourceLastupdated'?: CommonSourceLastupdated
  'Common.LeaseTypes'?: CommonLeaseTypes1
  'Common.LongDescription'?: CommonLongDescription
  'Common.MaximumSize'?: CommonMaximumSize
  'Common.MinimumSize'?: CommonMinimumSize
  'Common.ListingCount'?: CommonListingCount
  'Common.NumberOfStoreys'?: CommonNumberOfStoreys
  'Common.YearBuilt'?: CommonYearBuilt
  'Common.IsParent'?: CommonIsParent
  'Common.NumberOfBedrooms'?: CommonNumberOfBedrooms
  'Common.Photos'?: CommonPhotos1
  'Common.PrimaryKey': CommonPrimaryKey
  'Common.PropertyTypes'?: CommonPropertyTypes
  'Common.RestrictedSites'?: CommonRestrictedSites
  'Common.Strapline'?: CommonStrapline
  'Common.TotalSize'?: CommonTotalSize
  'Common.EnergyPerformanceInformation'?: CommonEnergyPerformanceInformation
  'Common.EnergyPerformanceData'?: CommonEnergyPerformanceData
  'Common.UsageType': CommonUsageType
  'Common.Website'?: CommonWebsite2
  'Common.Walkthrough'?: CommonWalkthrough
  'Common.ParentProperty'?: CommonParentProperty
  'UnitedKingdom.VATPayable'?: UnitedKingdomVATPayable
  'UnitedKingdom.UseClass'?: UnitedKingdomUseClass1
  'Canada.UseClass'?: CanadaUseClass
  'Common.LeaseInfo'?: CommonLeaseInfo
  'UnitedKingdom.BusinessRatesInfo'?: UnitedKingdomBusinessRatesInfo
  'Industrial.LoadingDocks'?: IndustrialLoadingDocks
  'Industrial.LoadingDocksUnit'?: IndustrialLoadingDocksUnit
  'Industrial.LoadingDoors'?: IndustrialLoadingDoors
  'Common.LocationDescription'?: IndustrialLocationDescription
  'Common.PointsOfInterest'?: IndustrialPointsOfInterestType
  'Common.InternalParkingSpaces'?: CommonInternalParkingSpaces
  'Common.ExternalParkingSpaces'?: CommonExternalParkingSpaces
  'Common.PropertySubType'?: PropertySubType
  'Common.Status'?: CommonStatus
  'Common.Parking'?: CommonParking
  'Common.Tenancy'?: CommonTenancy
  'Common.Comments'?: CommonComments
  'Common.ListingOrder'?: ListingOrder
  'Common.NumberOfLots'?: CommonNumberOfLots
  'Common.VideoLinks'?: VideoLinks
  'Common.BuildingOperator'?: CommonBuildingOperator
  'Common.BuildingOperatorID'?: CommonBuildingOperatorID
  'Common.RelatedListingOffice'?: CommonRelatedListingOffice
  'Common.Portfolios'?: CommonPortfolios1
  'Common.SaleAuthority'?: CommonSaleAuthority
  'Common.FloorNumber'?: number
}
/**
 * A generic address type used in several places in the PropertyListing data model
 */
export interface CommonActualAddress {
  'Common.Line1'?: CommonLine1
  'Common.Line2'?: CommonLine2
  'Common.Line3'?: CommonLine3
  'Common.Line4'?: CommonLine4
  'Common.Locallity'?: CommonLocallity
  'Common.Region'?: CommonRegion
  'Common.Zoning'?: CommonZoning
  'Common.PostalAddresses'?: CommonPostalAddresses
  'Common.AddressType'?: CommonAddressType1
  'Common.Country': CommonCountry
  'Common.PostCode': CommonPostCode
}
/**
 * One or more postal addresses. Each
 */
export interface CommonPostalAddress {
  'Common.Language': CommonLanguage
  'Common.Line1'?: CommonLine11
  'Common.Line2'?: CommonLine21
  'Common.Line3'?: CommonLine31
  'Common.Line4'?: CommonLine41
  'Common.Locallity'?: CommonLocallity1
  'Common.Region'?: CommonRegion1
  'Common.Zoning'?: CommonZoning1
  'Common.AddressType'?: CommonAddressType
}
/**
 * Depricated, where Broker or Agency would have been specified.
 */
export interface CommonAgency {
  'Common.AgentAddress'?: CommonAgentAddress
  'Common.AgencyName'?: CommonAgencyName
  'Common.EmailAddress'?: CommonEmailAddress
  'Common.TelephoneNumber'?: CommonTelephoneNumber
}
export interface CommonAgentAddress {
  'Common.Line1'?: CommonLine12
  'Common.Line2'?: CommonLine22
  'Common.Line3'?: CommonLine32
  'Common.Line4'?: CommonLine42
  'Common.Locallity'?: CommonLocallity2
  'Common.Country'?: CommonCountry1
  'Common.PostCode'?: CommonPostCode1
}
export interface CommonAgent {
  'Common.EmailAddress'?: CommonEmailAddress1
  'Common.AgentName'?: CommonAgentName
  'Common.TelephoneNumber'?: CommonTelephoneNumber1
  'Common.Website'?: CommonWebsite
}
/**
 * A contact group, detailing how to contact the agent for this property.
 */
export interface CommonContactGroup {
  'Common.GroupName'?: CommonGroupName
  'Common.Address'?: CommonAddress
  'Common.GroupType'?: CommonGroupType
  'Common.Website'?: CommonWebsite1
  'Common.Avatar'?: CommonAvatar
  'Common.Contacts'?: CommonContacts1
  'Common.ArrangeViewingContacts'?: CommonArrangeViewingContacts1
}
/**
 * Text in a specific culture.
 */
export interface TextForCulture {
  'Common.CultureCode': CommonCultureCode
  'Common.Text': CommonText
}
/**
 * A generic address type used in several places in the PropertyListing data model
 */
export interface CommonAddress {
  'Common.Line1'?: CommonLine1
  'Common.Line2'?: CommonLine2
  'Common.Line3'?: CommonLine3
  'Common.Line4'?: CommonLine4
  'Common.Locallity'?: CommonLocallity
  'Common.Region'?: CommonRegion
  'Common.Zoning'?: CommonZoning
  'Common.PostalAddresses'?: CommonPostalAddresses
  'Common.AddressType'?: CommonAddressType1
  'Common.Country': CommonCountry
  'Common.PostCode': CommonPostCode
}
/**
 * A contact mechanisms for a person or group of people..
 */
export interface CommonContacts {
  'Common.EmailAddress'?: CommonEmailAddress2
  'Common.AgentName'?: CommonAgentName1
  'Common.TelephoneNumber'?: CommonTelephoneNumber2
  'Common.Avatar'?: CommonAvatar1
  'Common.AgentTitle'?: CommonAgentTitle
  'Common.LicenseNumber'?: CommonLicenseNumber
}
/**
 * A contact mechanisms for a person or group of people..
 */
export interface CommonArrangeViewingContacts {
  'Common.EmailAddress'?: CommonEmailAddress3
  'Common.AgentName'?: CommonAgentName2
  'Common.TelephoneNumber'?: CommonTelephoneNumber3
  'Common.Avatar'?: CommonAvatar2
}
/**
 * Details of when the customer can move into the property
 */
export interface CommonAvailability {
  'Common.AvailabilityKind'?: CommonAvailabilityKind
  'Common.AvailableOnDescription'?: CommonAvailableOnDescription
  'Common.AvailabilityDate'?: CommonAvailabilityDate
  'Common.MonthsAfterLeaseOrSale'?: CommonMonthsAfterLeaseOrSale
}
/**
 * A pair of URI and Culture code that match each other.
 */
export interface CommonResourceForCultureType {
  'Common.Uri': CommonUri
  'Common.CultureCode': CommonCulture
  'Common.UriExternal'?: CommonUriExternal
  'Common.BrochureName'?: CommonBrochureName
}
/**
 * This object details a charge the will be levied. ChargeType, CurrencyCode, IntervalType, and PerUnitType are all mandatory. Ether a Ammount must be specified or OnApplication must equal true, but not both.
 */
export interface CommonChargeType {
  'Common.ChargeKind'?: CommonChargeKind
  'Common.CurrencyCode'?: CommonCurrencyCode
  'Common.Interval'?: CommonInterval
  'Common.Amount'?: CommonAmount
  'Common.AmountKind'?: CommonAmountKind
  'Common.Year'?: CommonYear
  'Common.PerUnit'?: CommonPerUnit
  'Common.TaxModifer'?: CommonTaxModifer
  'Common.PaidBy'?: CommonPaidByPurchaser
  'Common.DependentCharge'?: CommonDependentCharge
  'Common.ChargeModifer'?: CommonChargeModifer
  'Common.OnApplication'?: CommonOnApplication
  'Common.Exact'?: CommonExact
}
/**
 * The Latitude and Longitude of the property. This might not be be the exact location of the proeprty
 */
export interface CommonCoordinate {
  lat: Lat
  lon: Lon
}
/**
 * A geometry as defined by GeoJSON and a flag indicating if position is exact or fuzzy. Generally contains either a lat & lon, or a polyline. I.e either a point or an area.
 */
export interface CommonGeoLocation {
  geometry: GeoJsonGeometry
  'Common.Exact': CommonExact1
}
export interface Point {
  type?: 'Point'
  coordinates?: Position
  [k: string]: any
}
export interface MultiPoint {
  type?: 'MultiPoint'
  coordinates?: PositionArray
  [k: string]: any
}
export interface LineString {
  type?: 'LineString'
  coordinates?: LineString1
  [k: string]: any
}
export interface MultiLineString {
  type?: 'MultiLineString'
  coordinates?: Array<LineString1>
  [k: string]: any
}
export interface Polygon {
  type?: 'Polygon'
  coordinates?: Polygon1
  [k: string]: any
}
export interface MultiPolygon {
  type?: 'MultiPolygon'
  coordinates?: Array<Polygon1>
  [k: string]: any
}
/**
 * A size.
 */
export interface Size {
  'Common.SizeKind'?: CommonSizeKind
  'Common.Dimensions'?: CommonDimensions
}
/**
 * A actual specification of a dimension quantity in some unit.
 */
export interface CommonDimensionType {
  'Common.DimensionsUnits': CommonUnits
  'Common.Amount': CommonAmount1
}
/**
 * an Image (in zero or more renditions).
 */
export interface CommonImage {
  'Common.ImageCaption'?: CommonImageCaption
  'Common.Order'?: CommonOrder
  'Common.AddWatermark'?: CommonAddWatermark
  'Common.ImageResources': CommonImageResources
}
/**
 * A specific rendition of an image a some resolution.
 */
export interface ImageResource {
  'Common.Image.Height': CommonImageHeight
  'Common.Resource.Uri': CommonResourceUri
  'Common.Image.Width': CommonImageWidth
  'Common.Breakpoint'?: CommonBreakpoint
  'Source.Uri'?: SourceUri
}
/**
 * A floors and units structure.
 */
export interface CommonFloorsAndUnit {
  'Common.SubdivisionName': CommonSubdivisionName
  'Common.Areas'?: CommonAreas
  'Common.Unit.Status': CommonUnitStatus
  'Common.Unit.Use'?: CommonUnitUse
  'Common.Vacancy'?: CommonVacancy
  'Common.ApproxArea'?: CommonApproxArea
  'Common.AvailableFrom'?: CommonAvailableFrom1
  'Common.Availability'?: CommonAvailability1
  'Common.Charges'?: CommonCharges1
  'Common.SpaceDescription'?: CommonSpaceDescription
  'Common.LeaseTypes'?: CommonLeaseTypes
  'Common.UnitWalkthrough'?: CommonUnitWalkthrough
  'Common.UnitBrochures'?: CommonBrochures1
  'Common.UnitFloorPlans'?: CommonFloorPlans1
  'Common.UnitPhotos'?: CommonPhotos
  'Common.FloorNumber'?: number
  'Common.Identifier'?: string
}
/**
 * Text in a specific culture.
 */
export interface TextForCulture1 {
  'Common.CultureCode': CommonCultureCode1
  'Common.Text': CommonText1
  'Common.UnitDisplayName'?: CommonUnitDisplayName
}
/**
 * An Area.
 */
export interface CommonAreaType {
  'Common.Units': CommonUnits1
  'Common.Area': CommonArea
  'Common.MinArea'?: CommonMinArea
  'Common.MaxArea'?: CommonMaxArea
}
/**
 * Details of when the customer can move into the property
 */
export interface CommonAvailability1 {
  'Common.AvailabilityKind'?: CommonAvailabilityKind
  'Common.AvailableOnDescription'?: CommonAvailableOnDescription
  'Common.AvailabilityDate'?: CommonAvailabilityDate
  'Common.MonthsAfterLeaseOrSale'?: CommonMonthsAfterLeaseOrSale
}
/**
 * A single highlight in one or more languages.
 */
export interface CommonHighlight {
  'Common.Highlight'?: CommonHighlight1
}
/**
 * Text in a specific culture.
 */
export interface TextForCulture2 {
  'Common.CultureCode': CommonCultureCode2
  'Common.Text': CommonText2
}
/**
 * Details of when the customer can move into the property
 */
export interface CommonEnergyPerformanceData {
  'UnitedKingdom.EnergyPerformanceCertificateUri'?: UnitedKingdomEnergyPerformanceCertificateUri
  'Germany.EnergyPerformanceCertificateType'?: GermanyEnergyPerformanceCertificateType
  'Germany.EnergyPerformanceCertificateUri'?: GermanyEnergyPerformanceCertificateUri
  'Germany.EnergyPerformanceCertificateExpires'?: GermanyEnergyPerformanceCertificateExpires
  'Germany.ConstructionYear'?: GermanyConstructionYear
  'Germany.MajorEnergySources'?: GermanyMajorEnergySources
  'Germany.TotalEnergy'?: GermanyTotalEnergy
  'Germany.HeatEnergy'?: GermanyHeatEnergy
  'Germany.ElectricalEnergy'?: GermanyElectricalEnergy
}
/**
 * An ammount of power in some unit.
 */
export interface CommonPowerType {
  'Common.EnergyUnits': CommonEnergyUnits
  'Common.Amount': CommonAmount2
  'Common.Interval': CommonInterval1
  'Common.PerUnit': CommonInterval2
}
/**
 * Details of the current lease on the property
 */
export interface CommonLeaseInfo {
  'Common.LeaseContractStartDate'?: LeaseContractStartDate
  'Common.LeaseContractEndDate'?: LeaseContractEndDate
  'Common.LeaseContractBreakDate'?: LeaseRentNextReviewDate
  'Common.LeaseRentReviewCycle'?: CommonLeaseRentReviewCycle
  'Common.LeaseRentNextReviewDate'?: LeaseRentNextReviewDate1
}
/**
 * Details of the UK Business Rates Information
 */
export interface UnitedKingdomBusinessRatesInfo {
  'UnitedKingdom.RateInThePound'?: UnitedKingdomRateInThePound
  'UnitedKingdom.RateableValuePounds'?: UnitedKingdomRateableValuePounds
}
/**
 * A Point of interest is a place/thing some distance from the property.
 */
export interface CommonPointOfInterestType {
  'Common.InterestKind': CommonInterestKind
  'Common.NamesOfPlaces': CommonNamesOfPlaces
  'Common.Distances': CommonDistances
}
/**
 * A distance ammount in some unit.
 */
export interface CommonDistanceType {
  'Common.DistanceUnits': CommonDistanceUnits
  'Common.Amount': CommonAmount3
}
export interface CommonParking {
  'Common.Ratio'?: CommonRatio
  'Common.RatioPer'?: CommonRatioPer
  'Common.RatioPerUnit'?: CommonRatioPerUnit
  'Common.ParkingDetails'?: CommonParkingDetails1
}
export interface CommonParkingDetails {
  'Common.ParkingType'?: CommonParkingType
  'Common.ParkingSpace'?: CommonParkingSpace
  'Common.ParkingCharge'?: CommonParkingCharge1
}
export interface CommonParkingCharge {
  'Common.Amount'?: CommonAmount4
  'Common.Interval'?: CommonInterval3
  'Common.CurrencyCode'?: CommonCurrencyCode1
}
/**
 * Text in a specific culture.
 */
export interface TextForCulture3 {
  'Common.CultureCode': CommonCultureCode3
  'Common.Text': CommonText3
}
export interface AddVideo {
  'Common.Link'?: CommonLink
  'Common.CultureCode'?: CommonCultureCode4
  'Common.VideoDescription'?: CommonVideoDescription
}
