/**
 * ICalGLib 3.0
 *
 * Generated from 3.0
 */

import * as GObject from "gobject2";
import * as GLib from "glib2";

export function bt(): void;
export function errno_return(): ErrorEnum;
export function error_clear_errno(): void;
export function error_crash_here(): void;
export function error_get_error_state(error: ErrorEnum): ErrorState;
export function error_perror(): string;
export function error_restore(error: string, es: ErrorState): void;
export function error_set_errno(x: ErrorEnum): void;
export function error_set_error_state(error: ErrorEnum, state: ErrorState): void;
export function error_stop_here(): void;
export function error_strerror(e: ErrorEnum): string;
export function error_supress(error: string): ErrorState;
export function get_unknown_token_handling_setting(): Unknowntokenhandling;
export function memory_add_tmp_buffer(buf?: any | null): void;
export function memory_append_char(buf: number[], pos: number[], ch: number): [number[], number[]];
export function memory_append_string(buf: number[], pos: number[], str: string): [number[], number[]];
export function memory_free_buffer(buf?: any | null): void;
export function memory_new_buffer(size: number): any | null;
export function memory_resize_buffer(buf: any | null, size: number): any | null;
export function memory_strdup(s: string): string;
export function memory_tmp_buffer(size: number): any | null;
export function memory_tmp_copy(str: string): string;
export function mime_parse(func: MimeParseFunc): Component;
export function recur_expand_recurrence(rule: string, start: number, count: number): number[];
export function request_status_code(stat: RequestStatus): string;
export function request_status_desc(stat: RequestStatus): string;
export function request_status_from_num(major: number, minor: number): RequestStatus;
export function request_status_major(stat: RequestStatus): number;
export function request_status_minor(stat: RequestStatus): number;
export function restriction_check(comp: Component): number;
export function restriction_compare(restr: RestrictionKind, count: number): number;
export function set_unknown_token_handling_setting(newSetting: Unknowntokenhandling): void;
export type ComponentForeachRecurrenceFunc = (comp: Component, span: TimeSpan) => void;
export type ComponentForeachTZIDFunc = (param: Parameter) => void;
export type MimeParseFunc = (bytes: number[]) => string;
export type ParserLineGenFunc = (bytes: number[]) => string;

export namespace ComponentKind {
    export const $gtype: GObject.GType<ComponentKind>;
}

export enum ComponentKind {
    NO_COMPONENT = 0,
    ANY_COMPONENT = 1,
    XROOT_COMPONENT = 2,
    XATTACH_COMPONENT = 3,
    VEVENT_COMPONENT = 4,
    VTODO_COMPONENT = 5,
    VJOURNAL_COMPONENT = 6,
    VCALENDAR_COMPONENT = 7,
    VAGENDA_COMPONENT = 8,
    VFREEBUSY_COMPONENT = 9,
    VALARM_COMPONENT = 10,
    XAUDIOALARM_COMPONENT = 11,
    XDISPLAYALARM_COMPONENT = 12,
    XEMAILALARM_COMPONENT = 13,
    XPROCEDUREALARM_COMPONENT = 14,
    VTIMEZONE_COMPONENT = 15,
    XSTANDARD_COMPONENT = 16,
    XDAYLIGHT_COMPONENT = 17,
    X_COMPONENT = 18,
    VSCHEDULE_COMPONENT = 19,
    VQUERY_COMPONENT = 20,
    VREPLY_COMPONENT = 21,
    VCAR_COMPONENT = 22,
    VCOMMAND_COMPONENT = 23,
    XLICINVALID_COMPONENT = 24,
    XLICMIMEPART_COMPONENT = 25,
    VAVAILABILITY_COMPONENT = 26,
    XAVAILABLE_COMPONENT = 27,
    VPOLL_COMPONENT = 28,
    VVOTER_COMPONENT = 29,
    XVOTE_COMPONENT = 30,
}

export namespace ErrorEnum {
    export const $gtype: GObject.GType<ErrorEnum>;
}

export enum ErrorEnum {
    NO_ERROR = 0,
    BADARG_ERROR = 1,
    NEWFAILED_ERROR = 2,
    ALLOCATION_ERROR = 3,
    MALFORMEDDATA_ERROR = 4,
    PARSE_ERROR = 5,
    INTERNAL_ERROR = 6,
    FILE_ERROR = 7,
    USAGE_ERROR = 8,
    UNIMPLEMENTED_ERROR = 9,
    UNKNOWN_ERROR = 10,
}

export namespace ErrorState {
    export const $gtype: GObject.GType<ErrorState>;
}

export enum ErrorState {
    FATAL = 0,
    NONFATAL = 1,
    DEFAULT = 2,
    UNKNOWN = 3,
}

export namespace ParameterAction {
    export const $gtype: GObject.GType<ParameterAction>;
}

export enum ParameterAction {
    X = 20000,
    ASK = 20001,
    ABORT = 20002,
    NONE = 20099,
}

export namespace ParameterCutype {
    export const $gtype: GObject.GType<ParameterCutype>;
}

export enum ParameterCutype {
    X = 20100,
    INDIVIDUAL = 20101,
    GROUP = 20102,
    RESOURCE = 20103,
    ROOM = 20104,
    UNKNOWN = 20105,
    NONE = 20199,
}

export namespace ParameterDisplay {
    export const $gtype: GObject.GType<ParameterDisplay>;
}

export enum ParameterDisplay {
    X = 22000,
    BADGE = 22001,
    GRAPHIC = 22002,
    FULLSIZE = 22003,
    THUMBNAIL = 22004,
    NONE = 22099,
}

export namespace ParameterEnable {
    export const $gtype: GObject.GType<ParameterEnable>;
}

export enum ParameterEnable {
    X = 20200,
    TRUE = 20201,
    FALSE = 20202,
    NONE = 20299,
}

export namespace ParameterEncoding {
    export const $gtype: GObject.GType<ParameterEncoding>;
}

export enum ParameterEncoding {
    X = 20300,
    "8BIT" = 20301,
    BASE64 = 20302,
    NONE = 20399,
}

export namespace ParameterFbtype {
    export const $gtype: GObject.GType<ParameterFbtype>;
}

export enum ParameterFbtype {
    X = 20400,
    FREE = 20401,
    BUSY = 20402,
    BUSYUNAVAILABLE = 20403,
    BUSYTENTATIVE = 20404,
    NONE = 20499,
}

export namespace ParameterFeature {
    export const $gtype: GObject.GType<ParameterFeature>;
}

export enum ParameterFeature {
    X = 22100,
    AUDIO = 22101,
    CHAT = 22102,
    FEED = 22103,
    MODERATOR = 22104,
    PHONE = 22105,
    SCREEN = 22106,
    VIDEO = 22107,
    NONE = 22199,
}

export namespace ParameterKind {
    export const $gtype: GObject.GType<ParameterKind>;
}

export enum ParameterKind {
    ANY_PARAMETER = 0,
    ACTIONPARAM_PARAMETER = 1,
    ALTREP_PARAMETER = 2,
    CHARSET_PARAMETER = 3,
    CN_PARAMETER = 4,
    CUTYPE_PARAMETER = 5,
    DELEGATEDFROM_PARAMETER = 6,
    DELEGATEDTO_PARAMETER = 7,
    DIR_PARAMETER = 8,
    DISPLAY_PARAMETER = 46,
    EMAIL_PARAMETER = 50,
    ENABLE_PARAMETER = 9,
    ENCODING_PARAMETER = 10,
    FBTYPE_PARAMETER = 11,
    FEATURE_PARAMETER = 48,
    FILENAME_PARAMETER = 42,
    FMTTYPE_PARAMETER = 12,
    IANA_PARAMETER = 33,
    ID_PARAMETER = 13,
    LABEL_PARAMETER = 49,
    LANGUAGE_PARAMETER = 14,
    LATENCY_PARAMETER = 15,
    LOCAL_PARAMETER = 16,
    LOCALIZE_PARAMETER = 17,
    MANAGEDID_PARAMETER = 40,
    MEMBER_PARAMETER = 18,
    MODIFIED_PARAMETER = 44,
    OPTIONS_PARAMETER = 19,
    PARTSTAT_PARAMETER = 20,
    PATCHACTION_PARAMETER = 51,
    PUBLICCOMMENT_PARAMETER = 37,
    RANGE_PARAMETER = 21,
    REASON_PARAMETER = 43,
    RELATED_PARAMETER = 22,
    RELTYPE_PARAMETER = 23,
    REQUIRED_PARAMETER = 43,
    RESPONSE_PARAMETER = 38,
    ROLE_PARAMETER = 24,
    RSVP_PARAMETER = 25,
    SCHEDULEAGENT_PARAMETER = 34,
    SCHEDULEFORCESEND_PARAMETER = 35,
    SCHEDULESTATUS_PARAMETER = 36,
    SENTBY_PARAMETER = 26,
    SIZE_PARAMETER = 41,
    STAYINFORMED_PARAMETER = 39,
    SUBSTATE_PARAMETER = 45,
    TZID_PARAMETER = 27,
    VALUE_PARAMETER = 28,
    X_PARAMETER = 29,
    XLICCOMPARETYPE_PARAMETER = 30,
    XLICERRORTYPE_PARAMETER = 31,
    NO_PARAMETER = 32,
}

export namespace ParameterLocal {
    export const $gtype: GObject.GType<ParameterLocal>;
}

export enum ParameterLocal {
    X = 20500,
    TRUE = 20501,
    FALSE = 20502,
    NONE = 20599,
}

export namespace ParameterPartstat {
    export const $gtype: GObject.GType<ParameterPartstat>;
}

export enum ParameterPartstat {
    X = 20600,
    NEEDSACTION = 20601,
    ACCEPTED = 20602,
    DECLINED = 20603,
    TENTATIVE = 20604,
    DELEGATED = 20605,
    COMPLETED = 20606,
    INPROCESS = 20607,
    FAILED = 20608,
    NONE = 20699,
}

export namespace ParameterPatchaction {
    export const $gtype: GObject.GType<ParameterPatchaction>;
}

export enum ParameterPatchaction {
    X = 22200,
    CREATE = 22201,
    BYNAME = 22202,
    BYVALUE = 22203,
    BYPARAM = 22204,
    NONE = 22299,
}

export namespace ParameterRange {
    export const $gtype: GObject.GType<ParameterRange>;
}

export enum ParameterRange {
    X = 20700,
    THISANDPRIOR = 20701,
    THISANDFUTURE = 20702,
    NONE = 20799,
}

export namespace ParameterRelated {
    export const $gtype: GObject.GType<ParameterRelated>;
}

export enum ParameterRelated {
    X = 20800,
    START = 20801,
    END = 20802,
    NONE = 20899,
}

export namespace ParameterReltype {
    export const $gtype: GObject.GType<ParameterReltype>;
}

export enum ParameterReltype {
    X = 20900,
    PARENT = 20901,
    CHILD = 20902,
    SIBLING = 20903,
    POLL = 20904,
    NONE = 20999,
}

export namespace ParameterRequired {
    export const $gtype: GObject.GType<ParameterRequired>;
}

export enum ParameterRequired {
    X = 21000,
    TRUE = 21001,
    FALSE = 21002,
    NONE = 21099,
}

export namespace ParameterRole {
    export const $gtype: GObject.GType<ParameterRole>;
}

export enum ParameterRole {
    X = 21100,
    CHAIR = 21101,
    REQPARTICIPANT = 21102,
    OPTPARTICIPANT = 21103,
    NONPARTICIPANT = 21104,
    NONE = 21199,
}

export namespace ParameterRsvp {
    export const $gtype: GObject.GType<ParameterRsvp>;
}

export enum ParameterRsvp {
    X = 21200,
    TRUE = 21201,
    FALSE = 21202,
    NONE = 21299,
}

export namespace ParameterScheduleagent {
    export const $gtype: GObject.GType<ParameterScheduleagent>;
}

export enum ParameterScheduleagent {
    X = 21300,
    SERVER = 21301,
    CLIENT = 21302,
    NONE = 21399,
}

export namespace ParameterScheduleforcesend {
    export const $gtype: GObject.GType<ParameterScheduleforcesend>;
}

export enum ParameterScheduleforcesend {
    X = 21400,
    REQUEST = 21401,
    REPLY = 21402,
    NONE = 21499,
}

export namespace ParameterStayinformed {
    export const $gtype: GObject.GType<ParameterStayinformed>;
}

export enum ParameterStayinformed {
    X = 21500,
    TRUE = 21501,
    FALSE = 21502,
    NONE = 21599,
}

export namespace ParameterSubstate {
    export const $gtype: GObject.GType<ParameterSubstate>;
}

export enum ParameterSubstate {
    X = 21900,
    OK = 21901,
    ERROR = 21902,
    SUSPENDED = 21903,
    NONE = 21999,
}

export namespace ParameterValue {
    export const $gtype: GObject.GType<ParameterValue>;
}

export enum ParameterValue {
    X = 21600,
    BINARY = 21601,
    BOOLEAN = 21602,
    DATE = 21603,
    DURATION = 21604,
    FLOAT = 21605,
    INTEGER = 21606,
    PERIOD = 21607,
    RECUR = 21608,
    TEXT = 21609,
    URI = 21610,
    ERROR = 21611,
    DATETIME = 21612,
    UTCOFFSET = 21613,
    CALADDRESS = 21614,
    NONE = 21699,
}

export namespace ParameterXliccomparetype {
    export const $gtype: GObject.GType<ParameterXliccomparetype>;
}

export enum ParameterXliccomparetype {
    X = 21700,
    EQUAL = 21701,
    NOTEQUAL = 21702,
    LESS = 21703,
    GREATER = 21704,
    LESSEQUAL = 21705,
    GREATEREQUAL = 21706,
    REGEX = 21707,
    ISNULL = 21708,
    ISNOTNULL = 21709,
    NONE = 21799,
}

export namespace ParameterXlicerrortype {
    export const $gtype: GObject.GType<ParameterXlicerrortype>;
}

export enum ParameterXlicerrortype {
    X = 21800,
    COMPONENTPARSEERROR = 21801,
    PROPERTYPARSEERROR = 21802,
    PARAMETERNAMEPARSEERROR = 21803,
    PARAMETERVALUEPARSEERROR = 21804,
    VALUEPARSEERROR = 21805,
    INVALIDITIP = 21806,
    UNKNOWNVCALPROPERROR = 21807,
    MIMEPARSEERROR = 21808,
    VCALPROPPARSEERROR = 21809,
    NONE = 21899,
}

export namespace ParserState {
    export const $gtype: GObject.GType<ParserState>;
}

export enum ParserState {
    ERROR = 0,
    SUCCESS = 1,
    BEGIN_COMP = 2,
    END_COMP = 3,
    IN_PROGRESS = 4,
}

export namespace PropertyAction {
    export const $gtype: GObject.GType<PropertyAction>;
}

export enum PropertyAction {
    X = 10000,
    AUDIO = 10001,
    DISPLAY = 10002,
    EMAIL = 10003,
    PROCEDURE = 10004,
    NONE = 10099,
}

export namespace PropertyBusytype {
    export const $gtype: GObject.GType<PropertyBusytype>;
}

export enum PropertyBusytype {
    X = 10100,
    BUSY = 10101,
    BUSYUNAVAILABLE = 10102,
    BUSYTENTATIVE = 10103,
    NONE = 10199,
}

export namespace PropertyCarlevel {
    export const $gtype: GObject.GType<PropertyCarlevel>;
}

export enum PropertyCarlevel {
    X = 10200,
    CARNONE = 10201,
    CARMIN = 10202,
    CARFULL1 = 10203,
    NONE = 10299,
}

export namespace PropertyCmd {
    export const $gtype: GObject.GType<PropertyCmd>;
}

export enum PropertyCmd {
    X = 10400,
    ABORT = 10401,
    CONTINUE = 10402,
    CREATE = 10403,
    DELETE = 10404,
    GENERATEUID = 10405,
    GETCAPABILITY = 10406,
    IDENTIFY = 10407,
    MODIFY = 10408,
    MOVE = 10409,
    REPLY = 10410,
    SEARCH = 10411,
    SETLOCALE = 10412,
    NONE = 10499,
}

export namespace PropertyKind {
    export const $gtype: GObject.GType<PropertyKind>;
}

export enum PropertyKind {
    ANY_PROPERTY = 0,
    ACCEPTRESPONSE_PROPERTY = 102,
    ACKNOWLEDGED_PROPERTY = 1,
    ACTION_PROPERTY = 2,
    ALLOWCONFLICT_PROPERTY = 3,
    ATTACH_PROPERTY = 4,
    ATTENDEE_PROPERTY = 5,
    BUSYTYPE_PROPERTY = 101,
    CALID_PROPERTY = 6,
    CALMASTER_PROPERTY = 7,
    CALSCALE_PROPERTY = 8,
    CAPVERSION_PROPERTY = 9,
    CARLEVEL_PROPERTY = 10,
    CARID_PROPERTY = 11,
    CATEGORIES_PROPERTY = 12,
    CLASS_PROPERTY = 13,
    CMD_PROPERTY = 14,
    COLOR_PROPERTY = 118,
    COMMENT_PROPERTY = 15,
    COMPLETED_PROPERTY = 16,
    COMPONENTS_PROPERTY = 17,
    CONTACT_PROPERTY = 18,
    CREATED_PROPERTY = 19,
    CSID_PROPERTY = 20,
    DATEMAX_PROPERTY = 21,
    DATEMIN_PROPERTY = 22,
    DECREED_PROPERTY = 23,
    DEFAULTCHARSET_PROPERTY = 24,
    DEFAULTLOCALE_PROPERTY = 25,
    DEFAULTTZID_PROPERTY = 26,
    DEFAULTVCARS_PROPERTY = 27,
    DENY_PROPERTY = 28,
    DESCRIPTION_PROPERTY = 29,
    DTEND_PROPERTY = 30,
    DTSTAMP_PROPERTY = 31,
    DTSTART_PROPERTY = 32,
    DUE_PROPERTY = 33,
    DURATION_PROPERTY = 34,
    ESTIMATEDDURATION_PROPERTY = 113,
    EXDATE_PROPERTY = 35,
    EXPAND_PROPERTY = 36,
    EXRULE_PROPERTY = 37,
    FREEBUSY_PROPERTY = 38,
    GEO_PROPERTY = 39,
    GRANT_PROPERTY = 40,
    ITIPVERSION_PROPERTY = 41,
    LASTMODIFIED_PROPERTY = 42,
    LOCATION_PROPERTY = 43,
    MAXCOMPONENTSIZE_PROPERTY = 44,
    MAXDATE_PROPERTY = 45,
    MAXRESULTS_PROPERTY = 46,
    MAXRESULTSSIZE_PROPERTY = 47,
    METHOD_PROPERTY = 48,
    MINDATE_PROPERTY = 49,
    MULTIPART_PROPERTY = 50,
    NAME_PROPERTY = 115,
    ORGANIZER_PROPERTY = 52,
    OWNER_PROPERTY = 53,
    PERCENTCOMPLETE_PROPERTY = 54,
    PERMISSION_PROPERTY = 55,
    POLLCOMPLETION_PROPERTY = 110,
    POLLITEMID_PROPERTY = 103,
    POLLMODE_PROPERTY = 104,
    POLLPROPERTIES_PROPERTY = 105,
    POLLWINNER_PROPERTY = 106,
    PRIORITY_PROPERTY = 56,
    PRODID_PROPERTY = 57,
    QUERY_PROPERTY = 58,
    QUERYLEVEL_PROPERTY = 59,
    QUERYID_PROPERTY = 60,
    QUERYNAME_PROPERTY = 61,
    RDATE_PROPERTY = 62,
    RECURACCEPTED_PROPERTY = 63,
    RECUREXPAND_PROPERTY = 64,
    RECURLIMIT_PROPERTY = 65,
    RECURRENCEID_PROPERTY = 66,
    RELATEDTO_PROPERTY = 67,
    RELCALID_PROPERTY = 68,
    REPEAT_PROPERTY = 69,
    REPLYURL_PROPERTY = 111,
    REQUESTSTATUS_PROPERTY = 70,
    RESOURCES_PROPERTY = 71,
    RESPONSE_PROPERTY = 112,
    RESTRICTION_PROPERTY = 72,
    RRULE_PROPERTY = 73,
    SCOPE_PROPERTY = 74,
    SEQUENCE_PROPERTY = 75,
    STATUS_PROPERTY = 76,
    STORESEXPANDED_PROPERTY = 77,
    SUMMARY_PROPERTY = 78,
    TARGET_PROPERTY = 79,
    TASKMODE_PROPERTY = 114,
    TRANSP_PROPERTY = 80,
    TRIGGER_PROPERTY = 81,
    TZID_PROPERTY = 82,
    TZIDALIASOF_PROPERTY = 108,
    TZNAME_PROPERTY = 83,
    TZOFFSETFROM_PROPERTY = 84,
    TZOFFSETTO_PROPERTY = 85,
    TZUNTIL_PROPERTY = 109,
    TZURL_PROPERTY = 86,
    UID_PROPERTY = 87,
    URL_PROPERTY = 88,
    VERSION_PROPERTY = 89,
    VOTER_PROPERTY = 107,
    X_PROPERTY = 90,
    XLICCLASS_PROPERTY = 91,
    XLICCLUSTERCOUNT_PROPERTY = 92,
    XLICERROR_PROPERTY = 93,
    XLICMIMECHARSET_PROPERTY = 94,
    XLICMIMECID_PROPERTY = 95,
    XLICMIMECONTENTTYPE_PROPERTY = 96,
    XLICMIMEENCODING_PROPERTY = 97,
    XLICMIMEFILENAME_PROPERTY = 98,
    XLICMIMEOPTINFO_PROPERTY = 99,
    NO_PROPERTY = 100,
}

export namespace PropertyMethod {
    export const $gtype: GObject.GType<PropertyMethod>;
}

export enum PropertyMethod {
    X = 10500,
    PUBLISH = 10501,
    REQUEST = 10502,
    REPLY = 10503,
    ADD = 10504,
    CANCEL = 10505,
    REFRESH = 10506,
    COUNTER = 10507,
    DECLINECOUNTER = 10508,
    CREATE = 10509,
    READ = 10510,
    RESPONSE = 10511,
    MOVE = 10512,
    MODIFY = 10513,
    GENERATEUID = 10514,
    DELETE = 10515,
    NONE = 10599,
}

export namespace PropertyPollcompletion {
    export const $gtype: GObject.GType<PropertyPollcompletion>;
}

export enum PropertyPollcompletion {
    X = 10600,
    SERVER = 10601,
    SERVERSUBMIT = 10602,
    SERVERCHOICE = 10603,
    CLIENT = 10604,
    NONE = 10699,
}

export namespace PropertyPollmode {
    export const $gtype: GObject.GType<PropertyPollmode>;
}

export enum PropertyPollmode {
    X = 10700,
    BASIC = 10701,
    NONE = 10799,
}

export namespace PropertyQuerylevel {
    export const $gtype: GObject.GType<PropertyQuerylevel>;
}

export enum PropertyQuerylevel {
    X = 10800,
    CALQL1 = 10801,
    CALQLNONE = 10802,
    NONE = 10899,
}

export namespace PropertyStatus {
    export const $gtype: GObject.GType<PropertyStatus>;
}

export enum PropertyStatus {
    X = 10900,
    TENTATIVE = 10901,
    CONFIRMED = 10902,
    COMPLETED = 10903,
    NEEDSACTION = 10904,
    CANCELLED = 10905,
    INPROCESS = 10906,
    DRAFT = 10907,
    FINAL = 10908,
    SUBMITTED = 10909,
    PENDING = 10910,
    FAILED = 10911,
    DELETED = 10912,
    NONE = 10999,
}

export namespace PropertyTaskmode {
    export const $gtype: GObject.GType<PropertyTaskmode>;
}

export enum PropertyTaskmode {
    X = 11200,
    AUTOMATICCOMPLETION = 11201,
    AUTOMATICFAILURE = 11202,
    AUTOMATICSTATUS = 11203,
    NONE = 11299,
}

export namespace PropertyTransp {
    export const $gtype: GObject.GType<PropertyTransp>;
}

export enum PropertyTransp {
    X = 11000,
    OPAQUE = 11001,
    OPAQUENOCONFLICT = 11002,
    TRANSPARENT = 11003,
    TRANSPARENTNOCONFLICT = 11004,
    NONE = 11099,
}

export namespace PropertyXlicclass {
    export const $gtype: GObject.GType<PropertyXlicclass>;
}

export enum PropertyXlicclass {
    X = 11100,
    PUBLISHNEW = 11101,
    PUBLISHUPDATE = 11102,
    PUBLISHFREEBUSY = 11103,
    REQUESTNEW = 11104,
    REQUESTUPDATE = 11105,
    REQUESTRESCHEDULE = 11106,
    REQUESTDELEGATE = 11107,
    REQUESTNEWORGANIZER = 11108,
    REQUESTFORWARD = 11109,
    REQUESTSTATUS = 11110,
    REQUESTFREEBUSY = 11111,
    REPLYACCEPT = 11112,
    REPLYDECLINE = 11113,
    REPLYDELEGATE = 11114,
    REPLYCRASHERACCEPT = 11115,
    REPLYCRASHERDECLINE = 11116,
    ADDINSTANCE = 11117,
    CANCELEVENT = 11118,
    CANCELINSTANCE = 11119,
    CANCELALL = 11120,
    REFRESH = 11121,
    COUNTER = 11122,
    DECLINECOUNTER = 11123,
    MALFORMED = 11124,
    OBSOLETE = 11125,
    MISSEQUENCED = 11126,
    UNKNOWN = 11127,
    NONE = 11199,
}

export namespace Property_Class {
    export const $gtype: GObject.GType<Property_Class>;
}

export enum Property_Class {
    X = 10300,
    PUBLIC = 10301,
    PRIVATE = 10302,
    CONFIDENTIAL = 10303,
    NONE = 10399,
}

export namespace RecurrenceArrayMaxValues {
    export const $gtype: GObject.GType<RecurrenceArrayMaxValues>;
}

export enum RecurrenceArrayMaxValues {
    RECURRENCE_ARRAY_MAX = 32639,
}

export namespace RecurrenceArraySizes {
    export const $gtype: GObject.GType<RecurrenceArraySizes>;
}

export enum RecurrenceArraySizes {
    SECOND_SIZE = 62,
    MINUTE_SIZE = 61,
    HOUR_SIZE = 25,
    MONTH_SIZE = 14,
    MONTHDAY_SIZE = 32,
    WEEKNO_SIZE = 56,
    YEARDAY_SIZE = 386,
    SETPOS_SIZE = 386,
    DAY_SIZE = 386,
}

export namespace RecurrenceFrequency {
    export const $gtype: GObject.GType<RecurrenceFrequency>;
}

export enum RecurrenceFrequency {
    SECONDLY_RECURRENCE = 0,
    MINUTELY_RECURRENCE = 1,
    HOURLY_RECURRENCE = 2,
    DAILY_RECURRENCE = 3,
    WEEKLY_RECURRENCE = 4,
    MONTHLY_RECURRENCE = 5,
    YEARLY_RECURRENCE = 6,
    NO_RECURRENCE = 7,
}

export namespace RecurrenceSkip {
    export const $gtype: GObject.GType<RecurrenceSkip>;
}

export enum RecurrenceSkip {
    BACKWARD = 0,
    FORWARD = 1,
    OMIT = 2,
    UNDEFINED = 3,
}

export namespace RecurrenceWeekday {
    export const $gtype: GObject.GType<RecurrenceWeekday>;
}

export enum RecurrenceWeekday {
    NO_WEEKDAY = 0,
    SUNDAY_WEEKDAY = 1,
    MONDAY_WEEKDAY = 2,
    TUESDAY_WEEKDAY = 3,
    WEDNESDAY_WEEKDAY = 4,
    THURSDAY_WEEKDAY = 5,
    FRIDAY_WEEKDAY = 6,
    SATURDAY_WEEKDAY = 7,
}

export namespace RequestStatus {
    export const $gtype: GObject.GType<RequestStatus>;
}

export enum RequestStatus {
    UNKNOWN_STATUS = 0,
    "2_0_SUCCESS_STATUS" = 1,
    "2_1_FALLBACK_STATUS" = 2,
    "2_2_IGPROP_STATUS" = 3,
    "2_3_IGPARAM_STATUS" = 4,
    "2_4_IGXPROP_STATUS" = 5,
    "2_5_IGXPARAM_STATUS" = 6,
    "2_6_IGCOMP_STATUS" = 7,
    "2_7_FORWARD_STATUS" = 8,
    "2_8_ONEEVENT_STATUS" = 9,
    "2_9_TRUNC_STATUS" = 10,
    "2_10_ONETODO_STATUS" = 11,
    "2_11_TRUNCRRULE_STATUS" = 12,
    "3_0_INVPROPNAME_STATUS" = 13,
    "3_1_INVPROPVAL_STATUS" = 14,
    "3_2_INVPARAM_STATUS" = 15,
    "3_3_INVPARAMVAL_STATUS" = 16,
    "3_4_INVCOMP_STATUS" = 17,
    "3_5_INVTIME_STATUS" = 18,
    "3_6_INVRULE_STATUS" = 19,
    "3_7_INVCU_STATUS" = 20,
    "3_8_NOAUTH_STATUS" = 21,
    "3_9_BADVERSION_STATUS" = 22,
    "3_10_TOOBIG_STATUS" = 23,
    "3_11_MISSREQCOMP_STATUS" = 24,
    "3_12_UNKCOMP_STATUS" = 25,
    "3_13_BADCOMP_STATUS" = 26,
    "3_14_NOCAP_STATUS" = 27,
    "3_15_INVCOMMAND" = 28,
    "4_0_BUSY_STATUS" = 29,
    "4_1_STORE_ACCESS_DENIED" = 30,
    "4_2_STORE_FAILED" = 31,
    "4_3_STORE_NOT_FOUND" = 32,
    "5_0_MAYBE_STATUS" = 33,
    "5_1_UNAVAIL_STATUS" = 34,
    "5_2_NOSERVICE_STATUS" = 35,
    "5_3_NOSCHED_STATUS" = 36,
    "6_1_CONTAINER_NOT_FOUND" = 37,
    "9_0_UNRECOGNIZED_COMMAND" = 38,
}

export namespace RestrictionKind {
    export const $gtype: GObject.GType<RestrictionKind>;
}

export enum RestrictionKind {
    NONE = 0,
    ZERO = 1,
    ONE = 2,
    ZEROPLUS = 3,
    ONEPLUS = 4,
    ZEROORONE = 5,
    ONEEXCLUSIVE = 6,
    ONEMUTUAL = 7,
    UNKNOWN = 8,
}

export namespace Unknowntokenhandling {
    export const $gtype: GObject.GType<Unknowntokenhandling>;
}

export enum Unknowntokenhandling {
    ASSUME_IANA_TOKEN = 1,
    DISCARD_TOKEN = 2,
    TREAT_AS_ERROR = 3,
}

export namespace ValueKind {
    export const $gtype: GObject.GType<ValueKind>;
}

export enum ValueKind {
    ANY_VALUE = 5000,
    ACTION_VALUE = 5027,
    ATTACH_VALUE = 5003,
    BINARY_VALUE = 5011,
    BOOLEAN_VALUE = 5021,
    BUSYTYPE_VALUE = 5032,
    CALADDRESS_VALUE = 5023,
    CARLEVEL_VALUE = 5016,
    CLASS_VALUE = 5019,
    CMD_VALUE = 5010,
    DATE_VALUE = 5002,
    DATETIME_VALUE = 5028,
    DATETIMEDATE_VALUE = 5036,
    DATETIMEPERIOD_VALUE = 5015,
    DURATION_VALUE = 5020,
    FLOAT_VALUE = 5013,
    GEO_VALUE = 5004,
    INTEGER_VALUE = 5017,
    METHOD_VALUE = 5030,
    PERIOD_VALUE = 5014,
    POLLCOMPLETION_VALUE = 5034,
    POLLMODE_VALUE = 5033,
    QUERY_VALUE = 5001,
    QUERYLEVEL_VALUE = 5012,
    RECUR_VALUE = 5026,
    REQUESTSTATUS_VALUE = 5009,
    STATUS_VALUE = 5005,
    STRING_VALUE = 5007,
    TASKMODE_VALUE = 5035,
    TEXT_VALUE = 5008,
    TRANSP_VALUE = 5006,
    TRIGGER_VALUE = 5024,
    URI_VALUE = 5018,
    UTCOFFSET_VALUE = 5029,
    X_VALUE = 5022,
    XLICCLASS_VALUE = 5025,
    NO_VALUE = 5031,
}
export module Array {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Array extends Object {
    static $gtype: GObject.GType<Array>;

    constructor(properties?: Partial<Array.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Array.ConstructorProperties>, ...args: any[]): void;

    // Members

    copy(): Array;
    remove_element_at(position: number): void;
    size(): number;
}
export module Attach {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Attach extends Object {
    static $gtype: GObject.GType<Attach>;

    constructor(properties?: Partial<Attach.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Attach.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_from_bytes(bytes: GLib.Bytes | Uint8Array): Attach;
    static new_from_data(data: string, free_fn?: GLib.Func | null): Attach;
    static new_from_url(url: string): Attach;

    // Members

    get_data(): string | null;
    // Conflicted with GObject.Object.get_data
    get_data(...args: never[]): any;
    get_is_url(): boolean;
    get_url(): string | null;
}
export module CompIter {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class CompIter extends Object {
    static $gtype: GObject.GType<CompIter>;

    constructor(properties?: Partial<CompIter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<CompIter.ConstructorProperties>, ...args: any[]): void;

    // Members

    deref(): Component;
    next(): Component;
    prior(): Component;
}
export module Component {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Component extends Object {
    static $gtype: GObject.GType<Component>;

    constructor(properties?: Partial<Component.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Component.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](kind: ComponentKind): Component;
    static new_from_string(str: string): Component;
    static new_vagenda(): Component;
    static new_valarm(): Component;
    static new_vavailability(): Component;
    static new_vcalendar(): Component;
    static new_vevent(): Component;
    static new_vfreebusy(): Component;
    static new_vjournal(): Component;
    static new_vpoll(): Component;
    static new_vquery(): Component;
    static new_vtimezone(): Component;
    static new_vtodo(): Component;
    static new_vvoter(): Component;
    static new_x(x_name: string): Component;
    static new_xavailable(): Component;
    static new_xdaylight(): Component;
    static new_xstandard(): Component;
    static new_xvote(): Component;

    // Members

    add_component(child: Component): void;
    add_property(property: Property): void;
    as_ical_string(): string;
    begin_component(kind: ComponentKind): CompIter;
    check_restrictions(): number;
    clone(): Component;
    convert_errors(): void;
    count_components(kind: ComponentKind): number;
    count_errors(): number;
    count_properties(kind: PropertyKind): number;
    end_component(kind: ComponentKind): CompIter;
    foreach_recurrence(start: Time, end: Time): void;
    foreach_tzid(): void;
    get_comment(): string;
    get_current_component(): Component;
    get_current_property(): Property;
    get_description(): string;
    get_dtend(): Time;
    get_dtstamp(): Time;
    get_dtstart(): Time;
    get_due(): Time;
    get_duration(): Duration;
    get_first_component(kind: ComponentKind): Component | null;
    get_first_property(kind: PropertyKind): Property | null;
    get_first_real_component(): Component;
    get_inner(): Component | null;
    get_location(): string;
    get_method(): PropertyMethod;
    get_next_component(kind: ComponentKind): Component | null;
    get_next_property(kind: PropertyKind): Property | null;
    get_parent(): Component | null;
    get_recurrenceid(): Time;
    get_relcalid(): string;
    get_sequence(): number;
    get_span(): TimeSpan;
    get_status(): PropertyStatus;
    get_summary(): string;
    get_timezone(tzid: string): Timezone | null;
    get_uid(): string;
    is_valid(): boolean;
    isa(): ComponentKind;
    isa_component(): number;
    merge_component(comp_to_merge: Component): void;
    remove_component(child: Component): void;
    remove_property(property: Property): void;
    set_comment(v: string): void;
    set_description(v: string): void;
    set_dtend(v: Time): void;
    set_dtstamp(v: Time): void;
    set_dtstart(v: Time): void;
    set_due(v: Time): void;
    set_duration(v: Duration): void;
    set_location(v: string): void;
    set_method(method: PropertyMethod): void;
    set_parent(parent?: Component | null): void;
    set_recurrenceid(v: Time): void;
    set_relcalid(v: string): void;
    set_sequence(v: number): void;
    set_status(status: PropertyStatus): void;
    set_summary(v: string): void;
    set_uid(v: string): void;
    strip_errors(): void;
    static kind_from_string(string: string): ComponentKind;
    static kind_is_valid(kind: ComponentKind): boolean;
    static kind_to_string(kind: ComponentKind): string;
}
export module Datetimeperiod {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Datetimeperiod extends Object {
    static $gtype: GObject.GType<Datetimeperiod>;

    constructor(properties?: Partial<Datetimeperiod.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Datetimeperiod.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Datetimeperiod;

    // Members

    get_period(): Period;
    get_time(): Time;
    set_period(period: Period): void;
    set_time(time: Time): void;
}
export module Duration {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Duration extends Object {
    static $gtype: GObject.GType<Duration>;

    constructor(properties?: Partial<Duration.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Duration.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_bad_duration(): Duration;
    static new_from_int(t: number): Duration;
    static new_from_string(str: string): Duration;
    static new_null_duration(): Duration;

    // Members

    as_ical_string(): string;
    as_int(): number;
    get_days(): number;
    get_hours(): number;
    get_minutes(): number;
    get_seconds(): number;
    get_weeks(): number;
    is_bad_duration(): boolean;
    is_neg(): boolean;
    is_null_duration(): boolean;
    set_days(days: number): void;
    set_hours(hours: number): void;
    set_is_neg(is_neg: boolean): void;
    set_minutes(minutes: number): void;
    set_seconds(seconds: number): void;
    set_weeks(weeks: number): void;
}
export module Geo {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Geo extends Object {
    static $gtype: GObject.GType<Geo>;

    constructor(properties?: Partial<Geo.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Geo.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](lat: number, lon: number): Geo;

    // Members

    clone(): Geo;
    get_lat(): number;
    get_lon(): number;
    set_lat(lat: number): void;
    set_lon(lon: number): void;
}
export module Object {
    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
        [key: string]: any;
        alwaysDestroy: boolean;
        isGlobalMemory: boolean;
        native: any;
        nativeDestroyFunc: any;
        owner: GObject.Object;
    }
}
export abstract class Object extends GObject.Object {
    static $gtype: GObject.GType<Object>;

    constructor(properties?: Partial<Object.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Object.ConstructorProperties>, ...args: any[]): void;

    // Properties
    get alwaysDestroy(): boolean;
    set alwaysDestroy(val: boolean);
    get isGlobalMemory(): boolean;
    get native(): any;
    get nativeDestroyFunc(): any;
    set nativeDestroyFunc(val: any);
    get owner(): GObject.Object;
    set owner(val: GObject.Object);

    // Members

    add_depender(depender: GObject.Object): void;
    get_always_destroy(): boolean;
    get_is_global_memory(): boolean;
    ref_owner<T = GObject.Object>(): T;
    remove_depender(depender: GObject.Object): void;
    remove_owner(): void;
    set_always_destroy(value: boolean): void;
    set_native_destroy_func(): void;
    set_owner(owner: GObject.Object): void;
    steal_native(): any | null;
    static free_global_objects(): void;
}
export module Parameter {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Parameter extends Object {
    static $gtype: GObject.GType<Parameter>;

    constructor(properties?: Partial<Parameter.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Parameter.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](v: ParameterKind): Parameter;
    static new_actionparam(v: ParameterAction): Parameter;
    static new_altrep(v: string): Parameter;
    static new_charset(v: string): Parameter;
    static new_cn(v: string): Parameter;
    static new_cutype(v: ParameterCutype): Parameter;
    static new_delegatedfrom(v: string): Parameter;
    static new_delegatedto(v: string): Parameter;
    static new_dir(v: string): Parameter;
    static new_display(value: ParameterDisplay): Parameter;
    static new_email(value: string): Parameter;
    static new_enable(v: ParameterEnable): Parameter;
    static new_encoding(v: ParameterEncoding): Parameter;
    static new_fbtype(v: ParameterFbtype): Parameter;
    static new_feature(value: ParameterFeature): Parameter;
    static new_filename(v: string): Parameter;
    static new_fmttype(v: string): Parameter;
    static new_from_string(value: string): Parameter;
    static new_from_value_string(kind: ParameterKind, value: string): Parameter;
    static new_iana(v: string): Parameter;
    static new_id(v: string): Parameter;
    static new_label(value: string): Parameter;
    static new_language(v: string): Parameter;
    static new_latency(v: string): Parameter;
    static new_local(v: ParameterLocal): Parameter;
    static new_localize(v: string): Parameter;
    static new_managedid(v: string): Parameter;
    static new_member(v: string): Parameter;
    static new_modified(v: string): Parameter;
    static new_options(v: string): Parameter;
    static new_partstat(v: ParameterPartstat): Parameter;
    static new_patchaction(value: ParameterPatchaction): Parameter;
    static new_publiccomment(v: string): Parameter;
    static new_range(v: ParameterRange): Parameter;
    static new_reason(v: string): Parameter;
    static new_related(v: ParameterRelated): Parameter;
    static new_reltype(v: ParameterReltype): Parameter;
    static new_required(v: ParameterRequired): Parameter;
    static new_response(v: number): Parameter;
    static new_role(v: ParameterRole): Parameter;
    static new_rsvp(v: ParameterRsvp): Parameter;
    static new_scheduleagent(v: ParameterScheduleagent): Parameter;
    static new_scheduleforcesend(v: ParameterScheduleforcesend): Parameter;
    static new_schedulestatus(v: string): Parameter;
    static new_sentby(v: string): Parameter;
    static new_size(v: string): Parameter;
    static new_stayinformed(v: ParameterStayinformed): Parameter;
    static new_substate(v: ParameterSubstate): Parameter;
    static new_tzid(v: string): Parameter;
    static new_value(v: ParameterValue): Parameter;
    static new_x(v: string): Parameter;
    static new_xliccomparetype(v: ParameterXliccomparetype): Parameter;
    static new_xlicerrortype(v: ParameterXlicerrortype): Parameter;

    // Members

    as_ical_string(): string;
    clone(): Parameter;
    get_actionparam(): ParameterAction;
    get_altrep(): string | null;
    get_charset(): string | null;
    get_cn(): string | null;
    get_cutype(): ParameterCutype | null;
    get_delegatedfrom(): string | null;
    get_delegatedto(): string | null;
    get_dir(): string | null;
    get_display(): ParameterDisplay;
    get_email(): string | null;
    get_enable(): ParameterEnable;
    get_encoding(): ParameterEncoding;
    get_fbtype(): ParameterFbtype;
    get_feature(): ParameterFeature;
    get_filename(): string | null;
    get_fmttype(): string | null;
    get_iana(): string | null;
    get_iana_name(): string | null;
    get_iana_value(): string | null;
    get_id(): string | null;
    get_label(): string | null;
    get_language(): string | null;
    get_latency(): string | null;
    get_local(): ParameterLocal;
    get_localize(): string | null;
    get_managedid(): string | null;
    get_member(): string | null;
    get_modified(): string | null;
    get_options(): string | null;
    get_parent(): Property | null;
    get_partstat(): ParameterPartstat;
    get_patchaction(): ParameterPatchaction;
    get_publiccomment(): string | null;
    get_range(): ParameterRange;
    get_reason(): string | null;
    get_related(): ParameterRelated;
    get_reltype(): ParameterReltype;
    get_required(): ParameterRequired;
    get_response(): number;
    get_role(): ParameterRole;
    get_rsvp(): ParameterRsvp;
    get_scheduleagent(): ParameterScheduleagent;
    get_scheduleforcesend(): ParameterScheduleforcesend;
    get_schedulestatus(): string | null;
    get_sentby(): string | null;
    get_size(): string | null;
    get_stayinformed(): ParameterStayinformed;
    get_substate(): ParameterSubstate;
    get_tzid(): string | null;
    get_value(): ParameterValue;
    get_x(): string | null;
    get_xliccomparetype(): ParameterXliccomparetype;
    get_xlicerrortype(): ParameterXlicerrortype;
    get_xname(): string | null;
    get_xvalue(): string | null;
    has_same_name(param2: Parameter): number;
    isa(): ParameterKind;
    isa_parameter(): number;
    set_actionparam(v: ParameterAction): void;
    set_altrep(v: string): void;
    set_charset(v: string): void;
    set_cn(v: string): void;
    set_cutype(v: ParameterCutype): void;
    set_delegatedfrom(v: string): void;
    set_delegatedto(v: string): void;
    set_dir(v: string): void;
    set_display(value: ParameterDisplay): void;
    set_email(value: string): void;
    set_enable(v: ParameterEnable): void;
    set_encoding(v: ParameterEncoding): void;
    set_fbtype(v: ParameterFbtype): void;
    set_feature(value: ParameterFeature): void;
    set_filename(v: string): void;
    set_fmttype(v: string): void;
    set_iana(v: string): void;
    set_iana_name(v: string): void;
    set_iana_value(v: string): void;
    set_id(v: string): void;
    set_label(value: string): void;
    set_language(v: string): void;
    set_latency(v: string): void;
    set_local(v: ParameterLocal): void;
    set_localize(v: string): void;
    set_managedid(v: string): void;
    set_member(v: string): void;
    set_modified(v: string): void;
    set_options(v: string): void;
    set_parent(property?: Property | null): void;
    set_partstat(v: ParameterPartstat): void;
    set_patchaction(value: ParameterPatchaction): void;
    set_publiccomment(v: string): void;
    set_range(v: ParameterRange): void;
    set_reason(v: string): void;
    set_related(v: ParameterRelated): void;
    set_reltype(v: ParameterReltype): void;
    set_required(v: ParameterRequired): void;
    set_response(v: number): void;
    set_role(v: ParameterRole): void;
    set_rsvp(v: ParameterRsvp): void;
    set_scheduleagent(v: ParameterScheduleagent): void;
    set_scheduleforcesend(v: ParameterScheduleforcesend): void;
    set_schedulestatus(v: string): void;
    set_sentby(v: string): void;
    set_size(v: string): void;
    set_stayinformed(v: ParameterStayinformed): void;
    set_substate(v: ParameterSubstate): void;
    set_tzid(v: string): void;
    set_value(v: ParameterValue): void;
    set_x(v: string): void;
    set_xliccomparetype(v: ParameterXliccomparetype): void;
    set_xlicerrortype(v: ParameterXlicerrortype): void;
    set_xname(v: string): void;
    set_xvalue(v: string): void;
    static kind_from_string(string: string): ParameterKind;
    static kind_is_valid(kind: ParameterKind): boolean;
    static kind_to_string(kind: ParameterKind): string;
    static value_to_value_kind(value: ParameterValue): ValueKind;
}
export module Parser {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Parser extends Object {
    static $gtype: GObject.GType<Parser>;

    constructor(properties?: Partial<Parser.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Parser.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Parser;

    // Members

    add_line(str?: string | null): Component | null;
    clean(): Component | null;
    free(): void;
    get_line(func: ParserLineGenFunc): string;
    get_state(): ParserState;
    parse(func: ParserLineGenFunc): Component;
    static parse_string(str: string): Component;
}
export module Period {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Period extends Object {
    static $gtype: GObject.GType<Period>;

    constructor(properties?: Partial<Period.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Period.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_from_string(str: string): Period;
    static new_null_period(): Period;

    // Members

    as_ical_string(): string;
    get_duration(): Duration;
    get_end(): Time;
    get_start(): Time;
    is_null_period(): boolean;
    is_valid_period(): boolean;
    set_duration(duration: Duration): void;
    set_end(end: Time): void;
    set_start(start: Time): void;
}
export module Property {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Property extends Object {
    static $gtype: GObject.GType<Property>;

    constructor(properties?: Partial<Property.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Property.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](kind: PropertyKind): Property;
    static new_acceptresponse(v: string): Property;
    static new_acknowledged(v: Time): Property;
    static new_action(v: PropertyAction): Property;
    static new_allowconflict(v: string): Property;
    static new_attach(v: Attach): Property;
    static new_attendee(v: string): Property;
    static new_busytype(v: PropertyBusytype): Property;
    static new_calid(v: string): Property;
    static new_calmaster(v: string): Property;
    static new_calscale(v: string): Property;
    static new_capversion(v: string): Property;
    static new_carid(v: string): Property;
    static new_carlevel(v: PropertyCarlevel): Property;
    static new_categories(v: string): Property;
    static new_class(v: Property_Class): Property;
    static new_cmd(v: PropertyCmd): Property;
    static new_color(v: string): Property;
    static new_comment(v: string): Property;
    static new_completed(v: Time): Property;
    static new_components(v: string): Property;
    static new_contact(v: string): Property;
    static new_created(v: Time): Property;
    static new_csid(v: string): Property;
    static new_datemax(v: Time): Property;
    static new_datemin(v: Time): Property;
    static new_decreed(v: string): Property;
    static new_defaultcharset(v: string): Property;
    static new_defaultlocale(v: string): Property;
    static new_defaulttzid(v: string): Property;
    static new_defaultvcars(v: string): Property;
    static new_deny(v: string): Property;
    static new_description(v: string): Property;
    static new_dtend(v: Time): Property;
    static new_dtstamp(v: Time): Property;
    static new_dtstart(v: Time): Property;
    static new_due(v: Time): Property;
    static new_duration(v: Duration): Property;
    static new_estimatedduration(v: Duration): Property;
    static new_exdate(v: Time): Property;
    static new_expand(v: number): Property;
    static new_exrule(v: Recurrence): Property;
    static new_freebusy(v: Period): Property;
    static new_from_string(str: string): Property;
    static new_geo(v: Geo): Property;
    static new_grant(v: string): Property;
    static new_itipversion(v: string): Property;
    static new_lastmodified(v: Time): Property;
    static new_location(v: string): Property;
    static new_maxcomponentsize(v: number): Property;
    static new_maxdate(v: Time): Property;
    static new_maxresults(v: number): Property;
    static new_maxresultssize(v: number): Property;
    static new_method(v: PropertyMethod): Property;
    static new_mindate(v: Time): Property;
    static new_multipart(v: string): Property;
    static new_name(v: string): Property;
    static new_organizer(v: string): Property;
    static new_owner(v: string): Property;
    static new_percentcomplete(v: number): Property;
    static new_permission(v: string): Property;
    static new_pollcompletion(v: PropertyPollcompletion): Property;
    static new_pollitemid(v: number): Property;
    static new_pollmode(v: PropertyPollmode): Property;
    static new_pollproperties(v: string): Property;
    static new_pollwinner(v: number): Property;
    static new_priority(v: number): Property;
    static new_prodid(v: string): Property;
    static new_query(v: string): Property;
    static new_queryid(v: string): Property;
    static new_querylevel(v: PropertyQuerylevel): Property;
    static new_queryname(v: string): Property;
    static new_rdate(v: Datetimeperiod): Property;
    static new_recuraccepted(v: string): Property;
    static new_recurexpand(v: string): Property;
    static new_recurlimit(v: string): Property;
    static new_recurrenceid(v: Time): Property;
    static new_relatedto(v: string): Property;
    static new_relcalid(v: string): Property;
    static new_repeat(v: number): Property;
    static new_replyurl(v: string): Property;
    static new_requeststatus(v: Reqstat): Property;
    static new_resources(v: string): Property;
    static new_response(v: number): Property;
    static new_restriction(v: string): Property;
    static new_rrule(v: Recurrence): Property;
    static new_scope(v: string): Property;
    static new_sequence(v: number): Property;
    static new_status(v: PropertyStatus): Property;
    static new_storesexpanded(v: string): Property;
    static new_summary(v: string): Property;
    static new_target(v: string): Property;
    static new_taskmode(v: PropertyTaskmode): Property;
    static new_transp(v: PropertyTransp): Property;
    static new_trigger(v: Trigger): Property;
    static new_tzid(v: string): Property;
    static new_tzidaliasof(v: string): Property;
    static new_tzname(v: string): Property;
    static new_tzoffsetfrom(v: number): Property;
    static new_tzoffsetto(v: number): Property;
    static new_tzuntil(v: Time): Property;
    static new_tzurl(v: string): Property;
    static new_uid(v: string): Property;
    static new_url(v: string): Property;
    static new_version(v: string): Property;
    static new_voter(v: string): Property;
    static new_x(v: string): Property;
    static new_xlicclass(v: PropertyXlicclass): Property;
    static new_xlicclustercount(v: string): Property;
    static new_xlicerror(v: string): Property;
    static new_xlicmimecharset(v: string): Property;
    static new_xlicmimecid(v: string): Property;
    static new_xlicmimecontenttype(v: string): Property;
    static new_xlicmimeencoding(v: string): Property;
    static new_xlicmimefilename(v: string): Property;
    static new_xlicmimeoptinfo(v: string): Property;

    // Members

    add_parameter(parameter: Parameter): void;
    as_ical_string(): string;
    clone(): Property;
    count_parameters(): number;
    get_acceptresponse(): string;
    get_acknowledged(): Time;
    get_action(): PropertyAction;
    get_allowconflict(): string;
    get_attach(): Attach;
    get_attendee(): string;
    get_busytype(): PropertyBusytype;
    get_calid(): string;
    get_calmaster(): string;
    get_calscale(): string;
    get_capversion(): string;
    get_carid(): string;
    get_carlevel(): PropertyCarlevel;
    get_categories(): string;
    get_class(): Property_Class;
    get_cmd(): PropertyCmd;
    get_color(): string;
    get_comment(): string;
    get_completed(): Time;
    get_components(): string;
    get_contact(): string;
    get_created(): Time;
    get_csid(): string;
    get_datemax(): Time;
    get_datemin(): Time;
    get_datetime_with_component(comp?: Component | null): Time;
    get_decreed(): string;
    get_defaultcharset(): string;
    get_defaultlocale(): string;
    get_defaulttzid(): string;
    get_defaultvcars(): string;
    get_deny(): string;
    get_description(): string;
    get_dtend(): Time;
    get_dtstamp(): Time;
    get_dtstart(): Time;
    get_due(): Time;
    get_duration(): Duration;
    get_estimatedduration(): Duration;
    get_exdate(): Time;
    get_expand(): number;
    get_exrule(): Recurrence;
    get_first_parameter(kind: ParameterKind): Parameter;
    get_freebusy(): Period;
    get_geo(): Geo;
    get_grant(): string;
    get_itipversion(): string;
    get_lastmodified(): Time;
    get_location(): string;
    get_maxcomponentsize(): number;
    get_maxdate(): Time;
    get_maxresults(): number;
    get_maxresultssize(): number;
    get_method(): PropertyMethod;
    get_mindate(): Time;
    get_multipart(): string;
    get_name(): string;
    get_next_parameter(kind: ParameterKind): Parameter;
    get_organizer(): string;
    get_owner(): string;
    get_parameter_as_string(name: string): string;
    get_parent(): Component | null;
    get_percentcomplete(): number;
    get_permission(): string;
    get_pollcompletion(): PropertyPollcompletion;
    get_pollitemid(): number;
    get_pollmode(): PropertyPollmode;
    get_pollproperties(): string;
    get_pollwinner(): number;
    get_priority(): number;
    get_prodid(): string;
    get_property_name(): string;
    get_query(): string;
    get_queryid(): string;
    get_querylevel(): PropertyQuerylevel;
    get_queryname(): string;
    get_rdate(): Datetimeperiod;
    get_recuraccepted(): string;
    get_recurexpand(): string;
    get_recurlimit(): string;
    get_recurrenceid(): Time;
    get_relatedto(): string;
    get_relcalid(): string;
    get_repeat(): number;
    get_replyurl(): string;
    get_requeststatus(): Reqstat;
    get_resources(): string;
    get_response(): number;
    get_restriction(): string;
    get_rrule(): Recurrence;
    get_scope(): string;
    get_sequence(): number;
    get_status(): PropertyStatus;
    get_storesexpanded(): string;
    get_summary(): string;
    get_target(): string;
    get_taskmode(): PropertyTaskmode;
    get_transp(): PropertyTransp;
    get_trigger(): Trigger;
    get_tzid(): string;
    get_tzidaliasof(): string;
    get_tzname(): string;
    get_tzoffsetfrom(): number;
    get_tzoffsetto(): number;
    get_tzuntil(): Time;
    get_tzurl(): string;
    get_uid(): string;
    get_url(): string;
    get_value(): Value;
    get_value_as_string(): string;
    get_version(): string;
    get_voter(): string;
    get_x(): string;
    get_x_name(): string | null;
    get_xlicclass(): PropertyXlicclass;
    get_xlicclustercount(): string;
    get_xlicerror(): string;
    get_xlicmimecharset(): string;
    get_xlicmimecid(): string;
    get_xlicmimecontenttype(): string;
    get_xlicmimeencoding(): string;
    get_xlicmimefilename(): string;
    get_xlicmimeoptinfo(): string;
    isa(): PropertyKind;
    isa_property(): number;
    remove_parameter_by_kind(kind: ParameterKind): void;
    remove_parameter_by_name(name: string): void;
    remove_parameter_by_ref(param: Parameter): void;
    set_acceptresponse(v: string): void;
    set_acknowledged(v: Time): void;
    set_action(v: PropertyAction): void;
    set_allowconflict(v: string): void;
    set_attach(v: Attach): void;
    set_attendee(v: string): void;
    set_busytype(v: PropertyBusytype): void;
    set_calid(v: string): void;
    set_calmaster(v: string): void;
    set_calscale(v: string): void;
    set_capversion(v: string): void;
    set_carid(v: string): void;
    set_carlevel(v: PropertyCarlevel): void;
    set_categories(v: string): void;
    set_class(v: Property_Class): void;
    set_cmd(v: PropertyCmd): void;
    set_color(v: string): void;
    set_comment(v: string): void;
    set_completed(v: Time): void;
    set_components(v: string): void;
    set_contact(v: string): void;
    set_created(v: Time): void;
    set_csid(v: string): void;
    set_datemax(v: Time): void;
    set_datemin(v: Time): void;
    set_decreed(v: string): void;
    set_defaultcharset(v: string): void;
    set_defaultlocale(v: string): void;
    set_defaulttzid(v: string): void;
    set_defaultvcars(v: string): void;
    set_deny(v: string): void;
    set_description(v: string): void;
    set_dtend(v: Time): void;
    set_dtstamp(v: Time): void;
    set_dtstart(v: Time): void;
    set_due(v: Time): void;
    set_duration(v: Duration): void;
    set_estimatedduration(v: Duration): void;
    set_exdate(v: Time): void;
    set_expand(v: number): void;
    set_exrule(v: Recurrence): void;
    set_freebusy(v: Period): void;
    set_geo(v: Geo): void;
    set_grant(v: string): void;
    set_itipversion(v: string): void;
    set_lastmodified(v: Time): void;
    set_location(v: string): void;
    set_maxcomponentsize(v: number): void;
    set_maxdate(v: Time): void;
    set_maxresults(v: number): void;
    set_maxresultssize(v: number): void;
    set_method(v: PropertyMethod): void;
    set_mindate(v: Time): void;
    set_multipart(v: string): void;
    set_name(v: string): void;
    set_organizer(v: string): void;
    set_owner(v: string): void;
    // Conflicted with ICalGLib.Object.set_owner
    set_owner(...args: never[]): any;
    set_parameter(parameter: Parameter): void;
    set_parameter_from_string(name: string, value: string): void;
    set_parent(component?: Component | null): void;
    set_percentcomplete(v: number): void;
    set_permission(v: string): void;
    set_pollcompletion(v: PropertyPollcompletion): void;
    set_pollitemid(v: number): void;
    set_pollmode(v: PropertyPollmode): void;
    set_pollproperties(v: string): void;
    set_pollwinner(v: number): void;
    set_priority(v: number): void;
    set_prodid(v: string): void;
    set_query(v: string): void;
    set_queryid(v: string): void;
    set_querylevel(v: PropertyQuerylevel): void;
    set_queryname(v: string): void;
    set_rdate(v: Datetimeperiod): void;
    set_recuraccepted(v: string): void;
    set_recurexpand(v: string): void;
    set_recurlimit(v: string): void;
    set_recurrenceid(v: Time): void;
    set_relatedto(v: string): void;
    set_relcalid(v: string): void;
    set_repeat(v: number): void;
    set_replyurl(v: string): void;
    set_requeststatus(v: Reqstat): void;
    set_resources(v: string): void;
    set_response(v: number): void;
    set_restriction(v: string): void;
    set_rrule(v: Recurrence): void;
    set_scope(v: string): void;
    set_sequence(v: number): void;
    set_status(v: PropertyStatus): void;
    set_storesexpanded(v: string): void;
    set_summary(v: string): void;
    set_target(v: string): void;
    set_taskmode(v: PropertyTaskmode): void;
    set_transp(v: PropertyTransp): void;
    set_trigger(v: Trigger): void;
    set_tzid(v: string): void;
    set_tzidaliasof(v: string): void;
    set_tzname(v: string): void;
    set_tzoffsetfrom(v: number): void;
    set_tzoffsetto(v: number): void;
    set_tzuntil(v: Time): void;
    set_tzurl(v: string): void;
    set_uid(v: string): void;
    set_url(v: string): void;
    set_value(value: Value): void;
    set_value_from_string(value: string, kind: string): void;
    set_version(v: string): void;
    set_voter(v: string): void;
    set_x(v: string): void;
    set_x_name(name: string): void;
    set_xlicclass(v: PropertyXlicclass): void;
    set_xlicclustercount(v: string): void;
    set_xlicerror(v: string): void;
    set_xlicmimecharset(v: string): void;
    set_xlicmimecid(v: string): void;
    set_xlicmimecontenttype(v: string): void;
    set_xlicmimeencoding(v: string): void;
    set_xlicmimefilename(v: string): void;
    set_xlicmimeoptinfo(v: string): void;
    static enum_to_string(e: number): string;
    static kind_and_string_to_enum(kind: number, str: string): number;
    static kind_from_string(string: string): PropertyKind;
    static kind_has_property(kind: PropertyKind, e: number): number;
    static kind_is_valid(kind: PropertyKind): boolean;
    static kind_to_string(kind: PropertyKind): string;
    static kind_to_value_kind(kind: PropertyKind): ValueKind;
    static method_from_string(str: string): PropertyMethod;
    static method_to_string(method: PropertyMethod): string;
    static recurrence_is_excluded(comp: Component, dtstart: Time, recurtime: Time): boolean;
    static status_from_string(str: string): PropertyStatus;
    static status_to_string(method: PropertyStatus): string;
}
export module RecurIterator {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class RecurIterator extends Object {
    static $gtype: GObject.GType<RecurIterator>;

    constructor(properties?: Partial<RecurIterator.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<RecurIterator.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](rule: Recurrence, dtstart: Time): RecurIterator;

    // Members

    next(): Time;
    set_start(start: Time): number;
}
export module Recurrence {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Recurrence extends Object {
    static $gtype: GObject.GType<Recurrence>;

    constructor(properties?: Partial<Recurrence.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Recurrence.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Recurrence;
    static new_from_string(str: string): Recurrence;

    // Members

    clear(): void;
    get_by_day(index: number): number;
    get_by_day_array(): number[];
    get_by_hour(index: number): number;
    get_by_hour_array(): number[];
    get_by_minute(index: number): number;
    get_by_minute_array(): number[];
    get_by_month(index: number): number;
    get_by_month_array(): number[];
    get_by_month_day(index: number): number;
    get_by_month_day_array(): number[];
    get_by_second(index: number): number;
    get_by_second_array(): number[];
    get_by_set_pos(index: number): number;
    get_by_set_pos_array(): number[];
    get_by_week_no(index: number): number;
    get_by_week_no_array(): number[];
    get_by_year_day(index: number): number;
    get_by_year_day_array(): number[];
    get_count(): number;
    get_freq(): RecurrenceFrequency;
    get_interval(): number;
    get_until(): Time;
    get_week_start(): RecurrenceWeekday;
    set_by_day(index: number, value: number): void;
    set_by_day_array(values: number[]): void;
    set_by_hour(index: number, value: number): void;
    set_by_hour_array(values: number[]): void;
    set_by_minute(index: number, value: number): void;
    set_by_minute_array(values: number[]): void;
    set_by_month(index: number, value: number): void;
    set_by_month_array(values: number[]): void;
    set_by_month_day(index: number, value: number): void;
    set_by_month_day_array(values: number[]): void;
    set_by_second(index: number, value: number): void;
    set_by_second_array(values: number[]): void;
    set_by_set_pos(index: number, value: number): void;
    set_by_set_pos_array(values: number[]): void;
    set_by_week_no(index: number, value: number): void;
    set_by_week_no_array(values: number[]): void;
    set_by_year_day(index: number, value: number): void;
    set_by_year_day_array(values: number[]): void;
    set_count(count: number): void;
    set_freq(freq: RecurrenceFrequency): void;
    set_interval(interval: number): void;
    set_until(until: Time): void;
    set_week_start(week_start: RecurrenceWeekday): void;
    to_string(): string;
    static day_day_of_week(day: number): RecurrenceWeekday;
    static day_position(day: number): number;
    static frequency_from_string(str: string): RecurrenceFrequency;
    static frequency_to_string(kind: RecurrenceFrequency): string;
    static month_is_leap(month: number): boolean;
    static month_month(month: number): number;
    static rscale_is_supported(): boolean;
    static rscale_supported_calendars(): Array;
    static skip_from_string(str: string): RecurrenceSkip;
    static skip_to_string(kind: RecurrenceSkip): string;
    static weekday_from_string(str: string): RecurrenceWeekday;
    static weekday_to_string(kind: RecurrenceWeekday): string;
}
export module Reqstat {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Reqstat extends Object {
    static $gtype: GObject.GType<Reqstat>;

    constructor(properties?: Partial<Reqstat.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Reqstat.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_from_string(str: string): Reqstat;

    // Members

    get_code(): RequestStatus;
    get_debug(): string;
    get_desc(): string;
    set_code(code: RequestStatus): void;
    to_string(): string;
}
export module Time {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Time extends Object {
    static $gtype: GObject.GType<Time>;

    constructor(properties?: Partial<Time.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Time.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](): Time;
    static new_current_with_zone(zone?: Timezone | null): Time;
    static new_from_day_of_year(day: number, year: number): Time;
    static new_from_string(str: string): Time;
    static new_from_timet_with_zone(v: number, is_date: number, zone?: Timezone | null): Time;
    static new_null_date(): Time;
    static new_null_time(): Time;
    static new_today(): Time;

    // Members

    add(d: Duration): Time;
    adjust(days: number, hours: number, minutes: number, seconds: number): void;
    as_ical_string(): string;
    as_timet(): number;
    as_timet_with_zone(zone?: Timezone | null): number;
    clone(): Time;
    compare(b: Time): number;
    compare_date_only(b: Time): number;
    compare_date_only_tz(b: Time, zone?: Timezone | null): number;
    convert_timezone(from_zone?: Timezone | null, to_zone?: Timezone | null): void;
    convert_to_zone(zone?: Timezone | null): Time;
    convert_to_zone_inplace(zone?: Timezone | null): void;
    day_of_week(): number;
    day_of_year(): number;
    get_date(): [number, number, number];
    get_day(): number;
    get_hour(): number;
    get_minute(): number;
    get_month(): number;
    get_second(): number;
    get_time(): [number, number, number];
    get_timezone(): Timezone;
    get_tzid(): string | null;
    get_year(): number;
    is_date(): boolean;
    is_daylight(): boolean;
    is_null_time(): boolean;
    is_utc(): boolean;
    is_valid_time(): boolean;
    normalize(): Time;
    normalize_inplace(): void;
    set_date(year: number, month: number, day: number): void;
    set_day(day: number): void;
    set_hour(hour: number): void;
    set_is_date(is_date: boolean): void;
    set_is_daylight(is_daylight: boolean): void;
    set_minute(minute: number): void;
    set_month(month: number): void;
    set_second(second: number): void;
    set_time(hour: number, minute: number, second: number): void;
    set_timezone(zone?: Timezone | null): void;
    set_year(year: number): void;
    start_doy_week(fdow: number): number;
    subtract(t2: Time): Duration;
    week_number(): number;
    static days_in_month(month: number, year: number): number;
    static days_in_year(year: number): number;
    static days_is_leap_year(year: number): boolean;
    static timezone_expand_vtimezone(comp: Component, end_year: number, changes: Array): void;
}
export module TimeSpan {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class TimeSpan extends Object {
    static $gtype: GObject.GType<TimeSpan>;

    constructor(properties?: Partial<TimeSpan.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<TimeSpan.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](dtstart: Time, dtend: Time, is_busy: number): TimeSpan;
    static new_timet(start: number, end: number, is_busy: boolean): TimeSpan;

    // Members

    clone(): TimeSpan;
    contains(container: TimeSpan): number;
    get_end(): number;
    get_is_busy(): boolean;
    get_start(): number;
    overlaps(s2: TimeSpan): number;
    set_end(end: number): void;
    set_is_busy(is_busy: boolean): void;
    set_start(start: number): void;
}
export module Timezone {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Timezone extends Object {
    static $gtype: GObject.GType<Timezone>;

    constructor(properties?: Partial<Timezone.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Timezone.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static array_new(): Timezone;
    static ["new"](): Timezone;

    // Members

    copy(): Timezone;
    dump_changes(max_year: number, fp?: any | null): number;
    get_component(): Component;
    get_display_name(): string;
    get_latitude(): number;
    get_location(): string | null;
    get_longitude(): number;
    get_tzid(): string | null;
    get_tznames(): string | null;
    get_utc_offset(tt: Time | null): [number, number];
    get_utc_offset_of_utc_time(tt: Time): [number, number];
    set_component(comp: Component): number;
    static array_append_from_vtimezone(timezones: Array, child: Component): void;
    static array_element_at(timezones: Array, index: number): Timezone;
    static free_builtin_timezones(): void;
    static free_zone_directory(): void;
    static get_builtin_timezone(location?: string | null): Timezone | null;
    static get_builtin_timezone_from_offset(offset: number, tzname?: string | null): Timezone;
    static get_builtin_timezone_from_tzid(tzid?: string | null): Timezone;
    static get_builtin_timezones(): Array;
    static get_builtin_tzdata(): boolean;
    static get_location_from_vtimezone(component: Component): string;
    static get_tznames_from_vtimezone(component: Component): string;
    static get_utc_timezone(): Timezone;
    static release_zone_tab(): void;
    static set_builtin_tzdata(set: boolean): void;
    static set_tzid_prefix(new_prefix: string): void;
    static set_zone_directory(path: string): void;
}
export module Trigger {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Trigger extends Object {
    static $gtype: GObject.GType<Trigger>;

    constructor(properties?: Partial<Trigger.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Trigger.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static new_from_int(reltime: number): Trigger;
    static new_from_string(str: string): Trigger;

    // Members

    get_duration(): Duration;
    get_time(): Time;
    is_bad_trigger(): boolean;
    is_null_trigger(): boolean;
    set_duration(duration: Duration): void;
    set_time(time: Time): void;
}
export module Value {
    export interface ConstructorProperties extends Object.ConstructorProperties {
        [key: string]: any;
    }
}
export class Value extends Object {
    static $gtype: GObject.GType<Value>;

    constructor(properties?: Partial<Value.ConstructorProperties>, ...args: any[]);
    _init(properties?: Partial<Value.ConstructorProperties>, ...args: any[]): void;

    // Constructors

    static ["new"](kind: ValueKind): Value;
    static new_action(v: PropertyAction): Value;
    static new_attach(v: Attach): Value;
    static new_binary(v: string): Value;
    static new_boolean(v: number): Value;
    static new_busytype(v: PropertyBusytype): Value;
    static new_caladdress(v: string): Value;
    static new_carlevel(v: PropertyCarlevel): Value;
    static new_class(v: Property_Class): Value;
    static new_cmd(v: PropertyCmd): Value;
    static new_date(v: Time): Value;
    static new_datetime(v: Time): Value;
    static new_datetimedate(v: Time): Value;
    static new_datetimeperiod(v: Datetimeperiod): Value;
    static new_duration(v: Duration): Value;
    static new_float(v: number): Value;
    static new_from_string(kind: ValueKind, str: string): Value;
    static new_geo(v: Geo): Value;
    static new_integer(v: number): Value;
    static new_method(v: PropertyMethod): Value;
    static new_period(v: Period): Value;
    static new_pollcompletion(v: PropertyPollcompletion): Value;
    static new_pollmode(v: PropertyPollmode): Value;
    static new_query(v: string): Value;
    static new_querylevel(v: PropertyQuerylevel): Value;
    static new_recur(v: Recurrence): Value;
    static new_requeststatus(v: Reqstat): Value;
    static new_status(v: PropertyStatus): Value;
    static new_string(v: string): Value;
    static new_taskmode(v: PropertyTaskmode): Value;
    static new_text(v: string): Value;
    static new_transp(v: PropertyTransp): Value;
    static new_trigger(v: Trigger): Value;
    static new_uri(v: string): Value;
    static new_utcoffset(v: number): Value;
    static new_x(v: string): Value;
    static new_xlicclass(v: PropertyXlicclass): Value;

    // Members

    as_ical_string(): string;
    clone(): Value;
    compare(b: Value): ParameterXliccomparetype;
    get_action(): PropertyAction;
    get_attach(): Attach | null;
    get_binary(): string | null;
    get_boolean(): number;
    get_busytype(): PropertyBusytype;
    get_caladdress(): string | null;
    get_carlevel(): PropertyCarlevel;
    get_class(): Property_Class;
    get_cmd(): PropertyCmd;
    get_date(): Time | null;
    get_datetime(): Time | null;
    get_datetimedate(): Time | null;
    get_datetimeperiod(): Datetimeperiod | null;
    get_duration(): Duration | null;
    get_float(): number;
    get_geo(): Geo | null;
    get_integer(): number;
    get_method(): PropertyMethod;
    get_parent(): Property | null;
    get_period(): Period | null;
    get_pollcompletion(): PropertyPollcompletion;
    get_pollmode(): PropertyPollmode;
    get_query(): string | null;
    get_querylevel(): PropertyQuerylevel;
    get_recur(): Recurrence | null;
    get_requeststatus(): Reqstat | null;
    get_status(): PropertyStatus;
    get_string(): string | null;
    get_taskmode(): PropertyTaskmode;
    get_text(): string | null;
    get_transp(): PropertyTransp;
    get_trigger(): Trigger | null;
    get_uri(): string | null;
    get_utcoffset(): number;
    get_x(): string | null;
    get_xlicclass(): PropertyXlicclass;
    is_valid(): boolean;
    isa(): ValueKind;
    isa_value(): number;
    reset_kind(): void;
    set_action(v: PropertyAction): void;
    set_attach(v: Attach): void;
    set_binary(v: string): void;
    set_boolean(v: number): void;
    set_busytype(v: PropertyBusytype): void;
    set_caladdress(v: string): void;
    set_carlevel(v: PropertyCarlevel): void;
    set_class(v: Property_Class): void;
    set_cmd(v: PropertyCmd): void;
    set_date(v: Time): void;
    set_datetime(v: Time): void;
    set_datetimedate(v: Time): void;
    set_datetimeperiod(v: Datetimeperiod): void;
    set_duration(v: Duration): void;
    set_float(v: number): void;
    set_geo(v: Geo): void;
    set_integer(v: number): void;
    set_method(v: PropertyMethod): void;
    set_parent(property?: Property | null): void;
    set_period(v: Period): void;
    set_pollcompletion(v: PropertyPollcompletion): void;
    set_pollmode(v: PropertyPollmode): void;
    set_query(v: string): void;
    set_querylevel(v: PropertyQuerylevel): void;
    set_recur(v: Recurrence): void;
    set_requeststatus(v: Reqstat): void;
    set_status(v: PropertyStatus): void;
    set_string(v: string): void;
    set_taskmode(v: PropertyTaskmode): void;
    set_text(v: string): void;
    set_transp(v: PropertyTransp): void;
    set_trigger(v: Trigger): void;
    set_uri(v: string): void;
    set_utcoffset(v: number): void;
    set_x(v: string): void;
    set_xlicclass(v: PropertyXlicclass): void;
    static decode_ical_string(szText: string): string | null;
    static encode_ical_string(szText: string): string | null;
    static kind_from_string(str: string): ValueKind;
    static kind_is_valid(kind: ValueKind): boolean;
    static kind_to_property_kind(kind: ValueKind): PropertyKind;
    static kind_to_string(kind: ValueKind): string;
}

export class ObjectPrivate {
    static $gtype: GObject.GType<ObjectPrivate>;

    constructor(copy: ObjectPrivate);
}

export class _Array {
    static $gtype: GObject.GType<_Array>;

    constructor(copy: _Array);
}

export class _Attach {
    static $gtype: GObject.GType<_Attach>;

    constructor(copy: _Attach);
}

export class _CompIter {
    static $gtype: GObject.GType<_CompIter>;

    constructor(copy: _CompIter);
}

export class _Component {
    static $gtype: GObject.GType<_Component>;

    constructor(copy: _Component);
}

export class _Datetimeperiod {
    static $gtype: GObject.GType<_Datetimeperiod>;

    constructor(copy: _Datetimeperiod);
}

export class _Duration {
    static $gtype: GObject.GType<_Duration>;

    constructor(copy: _Duration);
}

export class _Geo {
    static $gtype: GObject.GType<_Geo>;

    constructor(copy: _Geo);
}

export class _Parameter {
    static $gtype: GObject.GType<_Parameter>;

    constructor(copy: _Parameter);
}

export class _Parser {
    static $gtype: GObject.GType<_Parser>;

    constructor(copy: _Parser);
}

export class _Period {
    static $gtype: GObject.GType<_Period>;

    constructor(copy: _Period);
}

export class _Property {
    static $gtype: GObject.GType<_Property>;

    constructor(copy: _Property);
}

export class _RecurIterator {
    static $gtype: GObject.GType<_RecurIterator>;

    constructor(copy: _RecurIterator);
}

export class _Recurrence {
    static $gtype: GObject.GType<_Recurrence>;

    constructor(copy: _Recurrence);
}

export class _Reqstat {
    static $gtype: GObject.GType<_Reqstat>;

    constructor(copy: _Reqstat);
}

export class _Time {
    static $gtype: GObject.GType<_Time>;

    constructor(copy: _Time);
}

export class _TimeSpan {
    static $gtype: GObject.GType<_TimeSpan>;

    constructor(copy: _TimeSpan);
}

export class _Timezone {
    static $gtype: GObject.GType<_Timezone>;

    constructor(copy: _Timezone);
}

export class _Trigger {
    static $gtype: GObject.GType<_Trigger>;

    constructor(copy: _Trigger);
}

export class _Value {
    static $gtype: GObject.GType<_Value>;

    constructor(copy: _Value);
}
