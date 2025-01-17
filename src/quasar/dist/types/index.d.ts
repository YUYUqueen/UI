// @ts-ignore
/// <reference types="@quasar/app" />
import { App, Component, ComponentPublicInstance, ComponentOptions } from 'vue'
import { LooseDictionary } from './ts-helpers'

export interface AddressbarColor {
    /**
     * Sets addressbar color (for browsers that support it)
     * @param hexColor Color in hex format
     */
    set (hexColor : string): void
}

export interface AppFullscreen {
    /**
     * Does browser support it?
     */
    isCapable : boolean
    /**
     * Is Fullscreen active?
     */
    isActive : boolean
    /**
     * The DOM element used as root for fullscreen, otherwise 'null'
     */
    activeEl : LooseDictionary
    /**
     * Request going into Fullscreen (with optional target)
     * @param target Optional Element of target to request Fullscreen on
     * @returns A Promise with the outcome (true -> validation was a success, false -> invalid models detected)
     */
    request (target? : Element): Promise<any>
    /**
     * Request exiting out of Fullscreen mode
     * @returns A Promise with the outcome (true -> validation was a success, false -> invalid models detected)
     */
    exit (): Promise<any>
    /**
     * Request toggling Fullscreen mode (with optional target if requesting going into Fullscreen only)
     * @param target Optional Element of target to request Fullscreen on
     * @returns A Promise with the outcome (true -> validation was a success, false -> invalid models detected)
     */
    toggle (target? : Element): Promise<any>
}

export interface AppVisibility {
    /**
     * Does the app have user focus? Or the app runs in the background / another tab has the user's attention
     */
    appVisible : boolean
}

export interface BottomSheet {
    /**
     * Creates an ad-hoc Bottom Sheet; Same as calling $q.bottomSheet(...)
     * @param opts Bottom Sheet options
     * @returns Chainable Object
     */
    create (opts : {
            /**
             * CSS Class name to apply to the Dialog's QCard
             */
            class? : string | any[] | LooseDictionary
            /**
             * CSS style to apply to the Dialog's QCard
             */
            style? : string | any[] | LooseDictionary
            /**
             * Title
             */
            title? : string
            /**
             * Message
             */
            message? : string
            /**
             * Array of Objects, each Object defining an action
             */
            actions? : {
                    /**
                     * CSS classes for this action
                     */
                    classes? : string | any[] | LooseDictionary
                    /**
                     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
                     */
                    icon? : string
                    /**
                     * Path to an image for this action
                     */
                    img? : string
                    /**
                     * Display img as avatar (round borders)
                     */
                    avatar? : boolean
                    /**
                     * Action label
                     */
                    label? : string | number }[]
            /**
             * Display actions as a grid instead of as a list
             */
            grid? : boolean
            /**
             * Apply dark mode
             */
            dark? : boolean
            /**
             * Put Bottom Sheet into seamless mode; Does not use a backdrop so user is able to interact with the rest of the page too
             */
            seamless? : boolean
            /**
             * User cannot dismiss Bottom Sheet if clicking outside of it or hitting ESC key
             */
            persistent? : boolean }): DialogChainObject
}

export interface Cookies {
    /**
     * Get cookie
     * @param name Cookie name
     * @returns Cookie value; Returns null if cookie not found
     */
    get: CookiesGetMethodType
    /**
     * Get all cookies
     * @returns Object with cookie names (as keys) and their values
     */
    getAll (): LooseDictionary
    /**
     * Set cookie
     * @param name Cookie name
     * @param value Cookie value
     * @param options Cookie options
     */
    set (name : string, value : string, options? : {
            /**
             * Cookie expires detail; If specified as Number, then the unit is days; If specified as String, it can either be raw stringified date or in Xd Xh Xm Xs format (see examples)
             */
            expires? : number | string | Date
            /**
             * Cookie path
             */
            path? : string
            /**
             * Cookie domain
             */
            domain? : string
            /**
             * SameSite cookie option (not supported by IE11)
             */
            sameSite? : string
            /**
             * Is cookie Http Only?
             */
            httpOnly? : boolean
            /**
             * Is cookie secure? (https only)
             */
            secure? : boolean
            /**
             * Raw string for other cookie options; To be used as a last resort for possible newer props that are currently not yet implemented in Quasar
             */
            other? : string }): void
    /**
     * Check if cookie exists
     * @param name Cookie name
     * @returns Does cookie exists or not?
     */
    has (name : string): boolean
    /**
     * Remove a cookie
     * @param name Cookie name
     * @param options Cookie options
     */
    remove (name : string, options? : {
            /**
             * Cookie path
             */
            path? : string
            /**
             * Cookie domain
             */
            domain? : string }): void
    /**
     * For SSR usage only, and only on the global import (not on $q.cookies)
     * @param ssrContext SSR Context Object
     * @returns Cookie object (like $q.cookies) for SSR usage purposes
     */
    parseSSR (ssrContext : LooseDictionary): Cookies
}

export interface Dark {
    /**
     * Is Dark mode active?
     */
    isActive : boolean
    /**
     * Dark mode configuration (not status)
     */
    mode : boolean | 'auto'
    /**
     * Set dark mode status
     * @param status Dark mode status
     */
    set (status : boolean | 'auto'): void
    /**
     * Toggle dark mode status
     */
    toggle (): void
}

export interface Dialog {
    /**
     * Creates an ad-hoc Dialog; Same as calling $q.dialog(...)
     * @param opts Dialog options
     * @returns Chainable Object
     */
    create (opts : QDialogOptions): DialogChainObject
}

export interface Loading {
    /**
     * Is Loading active?
     */
    isActive : boolean
    /**
     * Activate and show
     * @param opts All props are optional
     */
    show (opts? : {
            /**
             * Wait a number of millisecond before showing; Not worth showing for 100ms for example then hiding it, so wait until you're sure it's a process that will take some considerable amount of time
             */
            delay? : number
            /**
             * Message to display
             */
            message? : string
            /**
             * Render the message as HTML; This can lead to XSS attacks so make sure that you sanitize the message first
             */
            html? : boolean
            /**
             * Content wrapped element custom classes
             */
            boxClass? : string
            /**
             * Spinner size (in pixels)
             */
            spinnerSize? : number
            /**
             * Color name for spinner from the Quasar Color Palette
             */
            spinnerColor? : string
            /**
             * Color name for text from the Quasar Color Palette
             */
            messageColor? : string
            /**
             * Color name for background from the Quasar Color Palette
             */
            backgroundColor? : string
            /**
             * One of the QSpinners
             */
            spinner? : Component
            /**
             * Add a CSS class to easily customize the component
             */
            customClass? : string
            /**
             * Ignore the default configuration (set by setDefaults()) for this instance only
             */
            ignoreDefaults? : boolean }): void
    /**
     * Hide it
     */
    hide (): void
    /**
     * Merge options into the default ones
     * @param opts Pick the subprop you want to define
     */
    setDefaults (opts : {
            /**
             * Wait a number of millisecond before showing; Not worth showing for 100ms for example then hiding it, so wait until you're sure it's a process that will take some considerable amount of time
             */
            delay? : number
            /**
             * Message to display
             */
            message? : string
            /**
             * Spinner size (in pixels)
             */
            spinnerSize? : number
            /**
             * Color name for spinner from the Quasar Color Palette
             */
            spinnerColor? : string
            /**
             * Color name for text from the Quasar Color Palette
             */
            messageColor? : string
            /**
             * Color name for background from the Quasar Color Palette
             */
            backgroundColor? : string
            /**
             * One of the QSpinners
             */
            spinner? : Component
            /**
             * Add a CSS class to easily customize the component
             */
            customClass? : string }): void
}

export interface LoadingBar {
    /**
     * Notify bar you've started a background activity
     * @param speed Delay (in milliseconds) between bar progress increments
     */
    start (speed? : number): void
    /**
     * Notify bar one background activity has finalized
     */
    stop (): void
    /**
     * Manually trigger a bar progress increment
     * @param amount Amount (0.0 < x < 1.0) to increment with
     */
    increment (amount? : number): void
    /**
     * Set the inner QAjaxBar's props
     * @param ...props QAjaxBar component props
     */
    setDefaults (...props: any[]): void
}

export interface LocalStorage {
    /**
     * Check if storage item exists
     * @param key Entry key
     * @returns Does the item exists or not?
     */
    has (key : string): boolean
    /**
     * Get storage number of entries
     * @returns Number of entries
     */
    getLength (): number
    /**
     * Get a storage item value
     * @param key Entry key
     * @returns Storage item value
     */
    getItem: WebStorageGetItemMethodType
    /**
     * Get the storage item value at specific index
     * @param index Entry index
     * @returns Storage item index
     */
    getIndex: WebStorageGetIndexMethodType
    /**
     * Get the storage key at specific index
     * @param index Entry index
     * @returns Storage key
     */
    getKey: WebStorageGetKeyMethodType
    /**
     * Retrieve all items in storage
     * @returns Object syntax: item name as Object key and its value
     */
    getAll (): LooseDictionary
    /**
     * Retrieve all keys in storage
     * @returns Storage keys (Array of Strings)
     */
    getAllKeys: WebStorageGetAllKeysMethodType
    /**
     * Set item in storage
     * @param key Entry key
     * @param value Entry value
     */
    set (key : string, value : Date | RegExp | number | boolean | Function | LooseDictionary | any[] | string | null): void
    /**
     * Remove a storage item
     * @param key Storage key
     */
    remove (key : string): void
    /**
     * Remove everything from the storage
     */
    clear (): void
    /**
     * Determine if storage has any items
     * @returns Tells if storage is empty or not
     */
    isEmpty (): boolean
}

export interface Meta {
}

export interface Notify {
    /**
     * Creates a notification; Same as calling $q.notify(...)
     * @param opts Notification options
     * @returns Calling this function with no parameters hides the notification; When called with one Object parameter (the original notification must NOT be grouped), it updates the notification (specified properties are shallow merged with previous ones; note that group and position cannot be changed while updating and so they are ignored)
     */
    create (opts : {
            /**
             * Optional type (that has been previously registered) or one of the out of the box ones ('positive', 'negative', 'warning', 'info', 'ongoing')
             */
            type? : string
            /**
             * Color name for component from the Quasar Color Palette
             */
            color? : string
            /**
             * Color name for component from the Quasar Color Palette
             */
            textColor? : string
            /**
             * The content of your message
             */
            message? : string
            /**
             * The content of your optional caption
             */
            caption? : string
            /**
             * Render message as HTML; This can lead to XSS attacks, so make sure that you sanitize the message first
             */
            html? : boolean
            /**
             * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
             */
            icon? : string
            /**
             * URL to an avatar/image; Suggestion: use statics folder
             */
            avatar? : string
            /**
             * Useful for notifications that are updated; Displays a Quasar spinner instead of an avatar or icon; If value is Boolean 'true' then the default QSpinner is shown
             */
            spinner? : boolean | Component
            /**
             * Window side/corner to stick to
             */
            position? : 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top' | 'bottom' | 'left' | 'right' | 'center'
            /**
             * Override the auto generated group with custom one; Grouped notifications cannot be updated; String or number value inform this is part of a specific group, regardless of its options; When a new notification is triggered with same group name, it replaces the old one and shows a badge with how many times the notification was triggered
             */
            group? : boolean | string | number
            /**
             * Color name for the badge from the Quasar Color Palette
             */
            badgeColor? : string
            /**
             * Color name for the badge text from the Quasar Color Palette
             */
            badgeTextColor? : string
            /**
             * Notification corner to stick badge to; If notification is on the left side then default is top-right otherwise it is top-left
             */
            badgePosition? : 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
            /**
             * Style definitions to be attributed to the badge
             */
            badgeStyle? : any[] | string | LooseDictionary
            /**
             * Class definitions to be attributed to the badge
             */
            badgeClass? : any[] | string | LooseDictionary
            /**
             * Show progress bar to detail when notification will disappear automatically (unless timeout is 0)
             */
            progress? : boolean
            /**
             * Class definitions to be attributed to the progress bar
             */
            progressClass? : any[] | string | LooseDictionary
            /**
             * Add CSS class(es) to the notification for easier customization
             */
            classes? : string
            /**
             * Key-value for attributes to be set on the notification
             */
            attrs? : LooseDictionary
            /**
             * Amount of time to display (in milliseconds)
             */
            timeout? : number
            /**
             * Notification actions (buttons); If a 'handler' is specified or not, clicking/tapping on the button will also close the notification; Also check 'closeBtn' convenience prop
             */
            actions? : any[]
            /**
             * Function to call when notification gets dismissed
             */
            onDismiss? : Function
            /**
             * Convenience way to add a dismiss button with a specific label, without using the 'actions' prop; If set to true, it uses a label accordding to the current Quasar language
             */
            closeBtn? : boolean | string
            /**
             * Put notification into multi-line mode; If this prop isn't used and more than one 'action' is specified then notification goes into multi-line mode by default
             */
            multiLine? : boolean
            /**
             * Ignore the default configuration (set by setDefaults()) for this instance only
             */
            ignoreDefaults? : boolean } | string): Function
    /**
     * Merge options into the default ones
     * @param opts Notification options
     */
    setDefaults (opts : {
            /**
             * Optional type (that has been previously registered) or one of the out of the box ones ('positive', 'negative', 'warning', 'info', 'ongoing')
             */
            type? : string
            /**
             * Color name for component from the Quasar Color Palette
             */
            color? : string
            /**
             * Color name for component from the Quasar Color Palette
             */
            textColor? : string
            /**
             * The content of your message
             */
            message? : string
            /**
             * The content of your optional caption
             */
            caption? : string
            /**
             * Render message as HTML; This can lead to XSS attacks, so make sure that you sanitize the message first
             */
            html? : boolean
            /**
             * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
             */
            icon? : string
            /**
             * URL to an avatar/image; Suggestion: use statics folder
             */
            avatar? : string
            /**
             * Useful for notifications that are updated; Displays a Quasar spinner instead of an avatar or icon; If value is Boolean 'true' then the default QSpinner is shown
             */
            spinner? : boolean | Component
            /**
             * Window side/corner to stick to
             */
            position? : 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top' | 'bottom' | 'left' | 'right' | 'center'
            /**
             * Color name for the badge from the Quasar Color Palette
             */
            badgeColor? : string
            /**
             * Color name for the badge text from the Quasar Color Palette
             */
            badgeTextColor? : string
            /**
             * Notification corner to stick badge to; If notification is on the left side then default is top-right otherwise it is top-left
             */
            badgePosition? : 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
            /**
             * Style definitions to be attributed to the badge
             */
            badgeStyle? : any[] | string | LooseDictionary
            /**
             * Class definitions to be attributed to the badge
             */
            badgeClass? : any[] | string | LooseDictionary
            /**
             * Show progress bar to detail when notification will disappear automatically (unless timeout is 0)
             */
            progress? : boolean
            /**
             * Class definitions to be attributed to the progress bar
             */
            progressClass? : any[] | string | LooseDictionary
            /**
             * Add CSS class(es) to the notification for easier customization
             */
            classes? : string
            /**
             * Key-value for attributes to be set on the notification
             */
            attrs? : LooseDictionary
            /**
             * Amount of time to display (in milliseconds)
             */
            timeout? : number
            /**
             * Notification actions (buttons); If a 'handler' is specified or not, clicking/tapping on the button will also close the notification; Also check 'closeBtn' convenience prop
             */
            actions? : any[]
            /**
             * Function to call when notification gets dismissed
             */
            onDismiss? : Function
            /**
             * Convenience way to add a dismiss button with a specific label, without using the 'actions' prop; If set to true, it uses a label accordding to the current Quasar language
             */
            closeBtn? : boolean | string
            /**
             * Put notification into multi-line mode; If this prop isn't used and more than one 'action' is specified then notification goes into multi-line mode by default
             */
            multiLine? : boolean }): void
    /**
     * Register a new type of notification (or override an existing one)
     * @param typeName Name of the type (to be used as 'type' prop later on)
     * @param typeOpts Notification options
     */
    registerType (typeName : string, typeOpts : {
            /**
             * Optional type (that has been previously registered) or one of the out of the box ones ('positive', 'negative', 'warning', 'info', 'ongoing')
             */
            type? : string
            /**
             * Color name for component from the Quasar Color Palette
             */
            color? : string
            /**
             * Color name for component from the Quasar Color Palette
             */
            textColor? : string
            /**
             * The content of your message
             */
            message? : string
            /**
             * The content of your optional caption
             */
            caption? : string
            /**
             * Render message as HTML; This can lead to XSS attacks, so make sure that you sanitize the message first
             */
            html? : boolean
            /**
             * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
             */
            icon? : string
            /**
             * URL to an avatar/image; Suggestion: use statics folder
             */
            avatar? : string
            /**
             * Useful for notifications that are updated; Displays a Quasar spinner instead of an avatar or icon; If value is Boolean 'true' then the default QSpinner is shown
             */
            spinner? : boolean | Component
            /**
             * Window side/corner to stick to
             */
            position? : 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top' | 'bottom' | 'left' | 'right' | 'center'
            /**
             * Color name for the badge from the Quasar Color Palette
             */
            badgeColor? : string
            /**
             * Color name for the badge text from the Quasar Color Palette
             */
            badgeTextColor? : string
            /**
             * Notification corner to stick badge to; If notification is on the left side then default is top-right otherwise it is top-left
             */
            badgePosition? : 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
            /**
             * Style definitions to be attributed to the badge
             */
            badgeStyle? : any[] | string | LooseDictionary
            /**
             * Class definitions to be attributed to the badge
             */
            badgeClass? : any[] | string | LooseDictionary
            /**
             * Show progress bar to detail when notification will disappear automatically (unless timeout is 0)
             */
            progress? : boolean
            /**
             * Class definitions to be attributed to the progress bar
             */
            progressClass? : any[] | string | LooseDictionary
            /**
             * Add CSS class(es) to the notification for easier customization
             */
            classes? : string
            /**
             * Key-value for attributes to be set on the notification
             */
            attrs? : LooseDictionary
            /**
             * Amount of time to display (in milliseconds)
             */
            timeout? : number
            /**
             * Notification actions (buttons); If a 'handler' is specified or not, clicking/tapping on the button will also close the notification; Also check 'closeBtn' convenience prop
             */
            actions? : any[]
            /**
             * Function to call when notification gets dismissed
             */
            onDismiss? : Function
            /**
             * Convenience way to add a dismiss button with a specific label, without using the 'actions' prop; If set to true, it uses a label accordding to the current Quasar language
             */
            closeBtn? : boolean | string
            /**
             * Put notification into multi-line mode; If this prop isn't used and more than one 'action' is specified then notification goes into multi-line mode by default
             */
            multiLine? : boolean }): void
}

export interface Platform {
    /**
     * Client browser User Agent
     */
    userAgent : string
    /**
     * Client browser details (property names depend on browser)
     */
    is : LooseDictionary
    /**
     * Client browser detectable properties
     */
    has : {
            /**
             * Client browser runs on device with touch support
             */
            touch : boolean
            /**
             * Client browser has Web Storage support
             */
            webStorage : boolean }
    /**
     * Client browser environment
     */
    within : {
            /**
             * Does the app run under an iframe?
             */
            iframe : boolean }
    /**
     * For SSR usage only, and only on the global import (not on $q.platform)
     * @param ssrContext SSR Context Object
     * @returns Platform object (like $q.platform) for SSR usage purposes
     */
    parseSSR (ssrContext : LooseDictionary): Platform
}

export interface Screen {
    /**
     * Screen width (in pixels)
     */
    width : number
    /**
     * Screen height (in pixels)
     */
    height : number
    /**
     * Tells current window breakpoint
     */
    name : 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    /**
     * Breakpoints (in pixels)
     */
    sizes : {
            /**
             * Breakpoint width size (minimum size)
             */
            sm : number
            /**
             * Breakpoint width size (minimum size)
             */
            md : number
            /**
             * Breakpoint width size (minimum size)
             */
            lg : number
            /**
             * Breakpoint width size (minimum size)
             */
            xl : number }
    /**
     * Tells if current screen width is lower than breakpoint-name
     */
    lt : {
            /**
             * Is current screen width lower than this breakpoint's lowest limit?
             */
            sm : boolean
            /**
             * Is current screen width lower than this breakpoint's lowest limit?
             */
            md : boolean
            /**
             * Is current screen width lower than this breakpoint's lowest limit?
             */
            lg : boolean
            /**
             * Is current screen width lower than this breakpoint's lowest limit?
             */
            xl : boolean }
    /**
     * Tells if current screen width is greater than breakpoint-name
     */
    gt : {
            /**
             * Is current screen width greater than this breakpoint's max limit?
             */
            xs : boolean
            /**
             * Is current screen width greater than this breakpoint's max limit?
             */
            sm : boolean
            /**
             * Is current screen width greater than this breakpoint's max limit?
             */
            md : boolean
            /**
             * Is current screen width greater than this breakpoint's max limit?
             */
            lg : boolean }
    /**
     * Current screen width fits exactly 'xs' breakpoint
     */
    xs : boolean
    /**
     * Current screen width fits exactly 'sm' breakpoint
     */
    sm : boolean
    /**
     * Current screen width fits exactly 'md' breakpoint
     */
    md : boolean
    /**
     * Current screen width fits exactly 'lg' breakpoint
     */
    lg : boolean
    /**
     * Current screen width fits exactly 'xl' breakpoint
     */
    xl : boolean
    /**
     * Override default breakpoint sizes
     * @param breakpoints Pick what you want to override
     */
    setSizes (breakpoints : {
            /**
             * Breakpoint width size (minimum size)
             */
            sm? : number
            /**
             * Breakpoint width size (minimum size)
             */
            md? : number
            /**
             * Breakpoint width size (minimum size)
             */
            lg? : number
            /**
             * Breakpoint width size (minimum size)
             */
            xl? : number }): void
    /**
     * Debounce update of all props when screen width/height changes
     * @param amount Amount in milliseconds
     */
    setDebounce (amount : number): void
}

export interface SessionStorage {
    /**
     * Check if storage item exists
     * @param key Entry key
     * @returns Does the item exists or not?
     */
    has (key : string): boolean
    /**
     * Get storage number of entries
     * @returns Number of entries
     */
    getLength (): number
    /**
     * Get a storage item value
     * @param key Entry key
     * @returns Storage item value
     */
    getItem: WebStorageGetItemMethodType
    /**
     * Get the storage item value at specific index
     * @param index Entry index
     * @returns Storage item index
     */
    getIndex: WebStorageGetIndexMethodType
    /**
     * Get the storage key at specific index
     * @param index Entry index
     * @returns Storage key
     */
    getKey: WebStorageGetKeyMethodType
    /**
     * Retrieve all items in storage
     * @returns Object syntax: item name as Object key and its value
     */
    getAll (): LooseDictionary
    /**
     * Retrieve all keys in storage
     * @returns Storage keys (Array of Strings)
     */
    getAllKeys: WebStorageGetAllKeysMethodType
    /**
     * Set item in storage
     * @param key Entry key
     * @param value Entry value
     */
    set (key : string, value : Date | RegExp | number | boolean | Function | LooseDictionary | any[] | string | null): void
    /**
     * Remove a storage item
     * @param key Storage key
     */
    remove (key : string): void
    /**
     * Remove everything from the storage
     */
    clear (): void
    /**
     * Determine if storage has any items
     * @returns Tells if storage is empty or not
     */
    isEmpty (): boolean
}

export interface ClosePopup {
}

export interface Intersection {
}

export interface Morph {
}

export interface Mutation {
}

export interface Ripple {
}

export interface Scroll {
}

export interface ScrollFire {
}

export interface TouchHold {
}

export interface TouchPan {
}

export interface TouchRepeat {
}

export interface TouchSwipe {
}

export interface QAjaxBar extends ComponentPublicInstance {
    /**
     * Position within window of where QAjaxBar should be displayed
     */
    position? : 'top' | 'right' | 'bottom' | 'left'
    /**
     * Size in CSS units, including unit name
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Skip Ajax hijacking (not a reactive prop)
     */
    skipHijack? : boolean
    /**
     * Reverse direction of progress
     */
    reverse? : boolean
    /**
     * Notify bar you are waiting for a new process to finish
     * @param speed Delay (in milliseconds) between progress auto-increments; If delay is 0 then it disables auto-incrementing
     */
    start (speed? : number): void
    /**
     * Manually trigger a bar progress increment
     * @param amount Amount (0 < x <= 100) to increment with
     */
    increment (amount? : number): void
    /**
     * Notify bar that one process you were waiting has finished
     */
    stop (): void
}

export interface QAvatar extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * The size in CSS units, including unit name, of the content (icon, text)
     */
    fontSize? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     */
    textColor? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    icon? : string
    /**
     * Removes border-radius so borders are squared
     */
    square? : boolean
    /**
     * Applies a small standard border-radius for a squared shape of the component
     */
    rounded? : boolean
}

export interface QBadge extends ComponentPublicInstance {
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     */
    textColor? : string
    /**
     * Tell QBadge if it should float to the top right side of the relative positioned parent element or not
     */
    floating? : boolean
    /**
     * Applies a 0.8 opacity; Useful especially for floating QBadge
     */
    transparent? : boolean
    /**
     * Content can wrap to multiple lines
     */
    multiLine? : boolean
    /**
     * Badge's content as string; overrides default slot if specified
     */
    label? : string | number
    /**
     * Sets vertical-align CSS prop
     */
    align? : 'top' | 'middle' | 'bottom'
    /**
     * Use 'outline' design (colored text and borders only)
     */
    outline? : boolean
    /**
     * Makes a rounded shaped badge
     */
    rounded? : boolean
}

export interface QBanner extends ComponentPublicInstance {
    /**
     * Display actions on same row as content
     */
    inlineActions? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Applies a small standard border-radius for a squared shape of the component
     */
    rounded? : boolean
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
}

export interface QBar extends ComponentPublicInstance {
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * The component background color lights up the parent's background (as opposed to default behavior which is to darken it); Works unless you specify a CSS background color for it
     */
    dark? : boolean
}

export interface QBreadcrumbs extends ComponentPublicInstance {
    /**
     * The string used to separate the breadcrumbs
     */
    separator? : string
    /**
     * The color of the active breadcrumb, which can be any color from the Quasar Color Palette
     */
    activeColor? : string
    /**
     * The gutter value allows you control over the space between the breadcrumb elements.
     */
    gutter? : 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    /**
     * The color used to color the separator, which can be any color from the Quasar Color Palette
     */
    separatorColor? : string
    /**
     * Specify how to align the breadcrumbs horizontally
     */
    align? : 'left' | 'center' | 'right' | 'between' | 'around' | 'evenly'
}

export interface QBreadcrumbsEl extends ComponentPublicInstance {
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     */
    to? : string | LooseDictionary
    /**
     * Equivalent to Vue Router <router-link> 'exact' property
     */
    exact? : boolean
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     */
    replace? : boolean
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     */
    activeClass? : string
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     */
    exactActiveClass? : string
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * The label text for the breadcrumb
     */
    label? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    icon? : string
    /**
     * HTML tag to use
     */
    tag? : string
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     */
    ripple? : boolean | LooseDictionary
}

export interface QBtnDropdown extends ComponentPublicInstance {
    /**
     * Controls Menu show/hidden state; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     */
    modelValue : boolean
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Define the button HTML DOM type
     */
    type? : 'a' | 'submit' | 'button' | 'reset'
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     */
    to? : string | LooseDictionary
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     */
    replace? : boolean
    /**
     * Equivalent to Vue Router <router-link> 'append' property
     */
    append? : boolean
    /**
     * The text that will be shown on the button
     */
    label? : string | number
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    icon? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    iconRight? : string
    /**
     * Use 'outline' design
     */
    outline? : boolean
    /**
     * Use 'flat' design
     */
    flat? : boolean
    /**
     * Remove shadow
     */
    unelevated? : boolean
    /**
     * Applies a more prominent border-radius for a squared shape button
     */
    rounded? : boolean
    /**
     * Use 'push' design
     */
    push? : boolean
    /**
     * Applies a glossy effect
     */
    glossy? : boolean
    /**
     * Makes button size and shape to fit a Floating Action Button
     */
    fab? : boolean
    /**
     * Makes button size and shape to fit a small Floating Action Button
     */
    fabMini? : boolean
    /**
     * Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set
     */
    padding? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     */
    textColor? : string
    /**
     * Avoid turning label text into caps (which happens by default)
     */
    noCaps? : boolean
    /**
     * Avoid label text wrapping
     */
    noWrap? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     */
    ripple? : boolean | LooseDictionary
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
    /**
     * Label or content alignment
     */
    align? : 'left' | 'right' | 'center' | 'around' | 'between' | 'evenly'
    /**
     * Stack icon and label vertically instead of on same line (like it is by default)
     */
    stack? : boolean
    /**
     * When used on flexbox parent, button will stretch to parent's height
     */
    stretch? : boolean
    /**
     * Put button into loading state (displays a QSpinner -- can be overridden by using a 'loading' slot)
     */
    loading? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Split dropdown icon into its own button
     */
    split? : boolean
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    dropdownIcon? : string
    /**
     * Disable main button (useful along with 'split' prop)
     */
    disableMainBtn? : boolean
    /**
     * Disables dropdown (dropdown button if using along 'split' prop)
     */
    disableDropdown? : boolean
    /**
     * Disables the rotation of the dropdown icon when state is toggled
     */
    noIconAnimation? : boolean
    /**
     * Style definitions to be attributed to the menu
     */
    contentStyle? : any[] | string | LooseDictionary
    /**
     * Class definitions to be attributed to the menu
     */
    contentClass? : any[] | string | LooseDictionary
    /**
     * Allows the menu to cover the button. When used, the 'menu-self' and 'menu-fit' props are no longer effective
     */
    cover? : boolean
    /**
     * Allows the menu to not be dismissed by a click/tap outside of the menu or by hitting the ESC key
     */
    persistent? : boolean
    /**
     * Changing route app won't dismiss the popup; No need to set it if 'persistent' prop is also set
     */
    noRouteDismiss? : boolean
    /**
     * Allows any click/tap in the menu to close it; Useful instead of attaching events to each menu item that should close the menu on click/tap
     */
    autoClose? : boolean
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     */
    menuAnchor? : 'top left' | 'top middle' | 'top right' | 'top start' | 'top end' | 'center left' | 'center middle' | 'center right' | 'center start' | 'center end' | 'bottom left' | 'bottom middle' | 'bottom right' | 'bottom start' | 'bottom end'
    /**
     * Two values setting the menu's own position relative to its target
     */
    menuSelf? : 'top left' | 'top middle' | 'top right' | 'top start' | 'top end' | 'center left' | 'center middle' | 'center right' | 'center start' | 'center end' | 'bottom left' | 'bottom middle' | 'bottom right' | 'bottom start' | 'bottom end'
    /**
     * An array of two numbers to offset the menu horizontally and vertically in pixels
     */
    menuOffset? : any[]
    /**
     * Triggers component to show
     * @param evt JS event object
     */
    show (evt? : LooseDictionary): void
    /**
     * Triggers component to hide
     * @param evt JS event object
     */
    hide (evt? : LooseDictionary): void
    /**
     * Triggers component to toggle between show/hide
     * @param evt JS event object
     */
    toggle (evt? : LooseDictionary): void
}

export interface QBtnGroup extends ComponentPublicInstance {
    /**
     * Spread horizontally to all available space
     */
    spread? : boolean
    /**
     * Use 'outline' design for buttons
     */
    outline? : boolean
    /**
     * Use 'flat' design for buttons
     */
    flat? : boolean
    /**
     * Remove shadow on buttons
     */
    unelevated? : boolean
    /**
     * Applies a more prominent border-radius for squared shape buttons
     */
    rounded? : boolean
    /**
     * Use 'push' design for buttons
     */
    push? : boolean
    /**
     * When used on flexbox parent, buttons will stretch to parent's height
     */
    stretch? : boolean
    /**
     * Applies a glossy effect
     */
    glossy? : boolean
}

export interface QBtnToggle extends ComponentPublicInstance {
    /**
     * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
     */
    name? : string
    /**
     * Model of the component; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     */
    modelValue : any
    /**
     * Array of Objects defining each option
     */
    options : {
            /**
             * Key-value for attributes to be set on the button
             */
            attrs? : LooseDictionary
            /**
             * Label of option button; Use this prop and/or 'icon', but at least one is required
             */
            label? : string
            /**
             * Icon of option button; Use this prop and/or 'label', but at least one is required
             */
            icon? : string
            /**
             * Value of the option that will be used by component model
             */
            value : any
            /**
             * Slot name to use for this button content; Useful for customizing content or even add tooltips
             */
            slot? : string
            [index: string]: any }[]
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     */
    textColor? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    toggleColor? : string
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     */
    toggleTextColor? : string
    /**
     * Spread horizontally to all available space
     */
    spread? : boolean
    /**
     * Use 'outline' design
     */
    outline? : boolean
    /**
     * Use 'flat' design
     */
    flat? : boolean
    /**
     * Remove shadow
     */
    unelevated? : boolean
    /**
     * Applies a more prominent border-radius for a squared shape button
     */
    rounded? : boolean
    /**
     * Use 'push' design
     */
    push? : boolean
    /**
     * Applies a glossy effect
     */
    glossy? : boolean
    /**
     * Button size name or a CSS unit including unit name
     */
    size? : string
    /**
     * Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set
     */
    padding? : string
    /**
     * Avoid turning label text into caps (which happens by default)
     */
    noCaps? : boolean
    /**
     * Avoid label text wrapping
     */
    noWrap? : boolean
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     */
    ripple? : boolean | LooseDictionary
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Put component in readonly mode
     */
    readonly? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Stack icon and label vertically instead of on same line (like it is by default)
     */
    stack? : boolean
    /**
     * When used on flexbox parent, button will stretch to parent's height
     */
    stretch? : boolean
    /**
     * Clears model on click of the already selected button
     */
    clearable? : boolean
}

export interface QBtn extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Define the button HTML DOM type
     */
    type? : 'a' | 'submit' | 'button' | 'reset'
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     */
    to? : string | LooseDictionary
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     */
    replace? : boolean
    /**
     * Equivalent to Vue Router <router-link> 'append' property
     */
    append? : boolean
    /**
     * The text that will be shown on the button
     */
    label? : string | number
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    icon? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    iconRight? : string
    /**
     * Use 'outline' design
     */
    outline? : boolean
    /**
     * Use 'flat' design
     */
    flat? : boolean
    /**
     * Remove shadow
     */
    unelevated? : boolean
    /**
     * Applies a more prominent border-radius for a squared shape button
     */
    rounded? : boolean
    /**
     * Use 'push' design
     */
    push? : boolean
    /**
     * Applies a glossy effect
     */
    glossy? : boolean
    /**
     * Makes button size and shape to fit a Floating Action Button
     */
    fab? : boolean
    /**
     * Makes button size and shape to fit a small Floating Action Button
     */
    fabMini? : boolean
    /**
     * Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set
     */
    padding? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     */
    textColor? : string
    /**
     * Avoid turning label text into caps (which happens by default)
     */
    noCaps? : boolean
    /**
     * Avoid label text wrapping
     */
    noWrap? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     */
    ripple? : boolean | LooseDictionary
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
    /**
     * Label or content alignment
     */
    align? : 'left' | 'right' | 'center' | 'around' | 'between' | 'evenly'
    /**
     * Stack icon and label vertically instead of on same line (like it is by default)
     */
    stack? : boolean
    /**
     * When used on flexbox parent, button will stretch to parent's height
     */
    stretch? : boolean
    /**
     * Put button into loading state (displays a QSpinner -- can be overridden by using a 'loading' slot)
     */
    loading? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Makes a circle shaped button
     */
    round? : boolean
    /**
     * Percentage (0.0 < x < 100.0); To be used along 'loading' prop; Display a progress bar on the background
     */
    percentage? : number
    /**
     * Progress bar on the background should have dark color; To be used along with 'percentage' and 'loading' props
     */
    darkPercentage? : boolean
    /**
     * Emulate click on QBtn
     * @param evt JS event object
     */
    click (evt? : LooseDictionary): void
}

export interface QCard extends ComponentPublicInstance {
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Removes border-radius so borders are squared
     */
    square? : boolean
    /**
     * Applies a 'flat' design (no default shadow)
     */
    flat? : boolean
    /**
     * Applies a default border to the component
     */
    bordered? : boolean
    /**
     * HTML tag to use
     */
    tag? : string
}

export interface QCardActions extends ComponentPublicInstance {
    /**
     * Specify how to align the actions
     */
    align? : 'left' | 'center' | 'right' | 'between' | 'around' | 'evenly' | 'stretch'
    /**
     * Display actions one below the other
     */
    vertical? : boolean
}

export interface QCardSection extends ComponentPublicInstance {
    /**
     * Display a horizontal section (will have no padding and can contain other QCardSection)
     */
    horizontal? : boolean
    /**
     * HTML tag to use
     */
    tag? : string
}

export interface QCarousel extends ComponentPublicInstance {
    /**
     * Fullscreen mode
     */
    fullscreen? : boolean
    /**
     * Changing route app won't exit fullscreen
     */
    noRouteFullscreenExit? : boolean
    /**
     * Model of the component defining the current panel's name; If a Number is used, it does not define the panel's index, but rather the panel's name which can also be an Integer; Either use this property (along with a listener for 'update:model-value' event) OR use the v-model directive.
     */
    modelValue? : any
    /**
     * Equivalent to using Vue's native <keep-alive> component on the content
     */
    keepAlive? : boolean
    /**
     * Equivalent to using Vue's native include prop for <keep-alive>; Values must be valid Vue component names
     */
    keepAliveInclude? : string | any[] | RegExp
    /**
     * Equivalent to using Vue's native exclude prop for <keep-alive>; Values must be valid Vue component names
     */
    keepAliveExclude? : string | any[] | RegExp
    /**
     * Equivalent to using Vue's native max prop for <keep-alive>
     */
    keepAliveMax? : number
    /**
     * Enable transitions between panel (also see 'transition-prev' and 'transition-next' props)
     */
    animated? : boolean
    /**
     * Makes component appear as infinite (when reaching last panel, next one will become the first one)
     */
    infinite? : boolean
    /**
     * Enable swipe events (may interfere with content's touch/mouse events)
     */
    swipeable? : boolean
    /**
     * Default transitions and swipe actions will be on the vertical axis
     */
    vertical? : boolean
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     */
    transitionPrev? : string
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     */
    transitionNext? : string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Height of Carousel in CSS units, including unit name
     */
    height? : string
    /**
     * Applies a default padding to each slide, according to the usage of 'arrows' and 'navigation' props
     */
    padding? : boolean
    /**
     * Color name for QCarousel button controls (arrows, navigation) from the Quasar Color Palette
     */
    controlColor? : string
    /**
     * Color name for text color of QCarousel button controls (arrows, navigation) from the Quasar Color Palette
     */
    controlTextColor? : string
    /**
     * Type of button to use for controls (arrows, navigation)
     */
    controlType? : 'regular' | 'flat' | 'outline' | 'push' | 'unelevated'
    /**
     * Jump to next slide at fixed time intervals (in milliseconds); 'false' disables autoplay, 'true' enables it for 5000ms intervals
     */
    autoplay? : number | boolean
    /**
     * Show navigation arrow buttons
     */
    arrows? : boolean
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    prevIcon? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    nextIcon? : string
    /**
     * Show navigation dots
     */
    navigation? : boolean
    /**
     * Side to stick navigation to
     */
    navigationPosition? : 'top' | 'right' | 'bottom' | 'left'
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    navigationIcon? : string
    /**
     * Icon name following Quasar convention for the active (current slide) navigation icon; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    navigationActiveIcon? : string
    /**
     * Show thumbnails
     */
    thumbnails? : boolean
    /**
     * Toggle the view to be fullscreen or not fullscreen
     */
    toggleFullscreen (): void
    /**
     * Enter the fullscreen view
     */
    setFullscreen (): void
    /**
     * Leave the fullscreen view
     */
    exitFullscreen (): void
    /**
     * Go to next panel
     */
    next (): void
    /**
     * Go to previous panel
     */
    previous (): void
    /**
     * Go to specific panel
     * @param panelName Panel's name, which may be a String or Number; Number does not refers to panel index, but to its name, which may be an Integer
     */
    goTo (panelName : string | number): void
}

export interface QCarouselControl extends ComponentPublicInstance {
    /**
     * Side/corner to stick to
     */
    position? : 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left'
    /**
     * An array of two numbers to offset the component horizontally and vertically (in pixels)
     */
    offset? : any[]
}

export interface QCarouselSlide extends ComponentPublicInstance {
    /**
     * Slide name
     */
    name : any
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * URL pointing to a slide background image (use statics folder)
     */
    imgSrc? : string
}

export interface QChatMessage extends ComponentPublicInstance {
    /**
     * Render as a sent message (so from current user)
     */
    sent? : boolean
    /**
     * Renders a label header/section only
     */
    label? : string
    /**
     * Color name (from the Quasar Color Palette) for chat bubble background
     */
    bgColor? : string
    /**
     * Color name (from the Quasar Color Palette) for chat bubble text
     */
    textColor? : string
    /**
     * Author's name
     */
    name? : string
    /**
     * URL to the avatar image of the author
     */
    avatar? : string
    /**
     * Array of strings that are the message body. Strings are not sanitized (see details in docs)
     */
    text? : any[]
    /**
     * Creation timestamp
     */
    stamp? : string
    /**
     * 1-12 out of 12 (same as col-*)
     */
    size? : string
    /**
     * Render the label as HTML; This can lead to XSS attacks so make sure that you sanitize the message first
     */
    labelHtml? : boolean
    /**
     * Render the name as HTML; This can lead to XSS attacks so make sure that you sanitize the message first
     */
    nameHtml? : boolean
    /**
     * Render the text as HTML; This can lead to XSS attacks so make sure that you sanitize the message first
     */
    textHtml? : boolean
    /**
     * Render the stamp as HTML; This can lead to XSS attacks so make sure that you sanitize the message first
     */
    stampHtml? : boolean
}

export interface QCheckbox extends ComponentPublicInstance {
    /**
     * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
     */
    name? : string
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Model of the component; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive
     */
    modelValue : any | any[]
    /**
     * Works when model ('value') is Array. It tells the component which value should add/remove when ticked/unticked
     */
    val? : any
    /**
     * What model value should be considered as checked/ticked/on?
     */
    trueValue? : any
    /**
     * What model value should be considered as unchecked/unticked/off?
     */
    falseValue? : any
    /**
     * What model value should be considered as 'indeterminate'?
     */
    indeterminateValue? : any
    /**
     * Determines toggle order of the two states ('t' stands for state of true, 'f' for state of false); If 'toggle-indeterminate' is true, then the order is: indet -> first state -> second state -> indet (and repeat), otherwise: indet -> first state -> second state -> first state -> second state -> ...
     */
    toggleOrder? : 'tf' | 'ft'
    /**
     * When user clicks/taps on the component, should we toggle through the indeterminate state too?
     */
    toggleIndeterminate? : boolean
    /**
     * Label to display along the component (or use the default slot instead of this prop)
     */
    label? : string
    /**
     * Label (if any specified) should be displayed on the left side of the component
     */
    leftLabel? : boolean
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Should the color (if specified any) be kept when the component is unticked/ off?
     */
    keepColor? : boolean
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
    /**
     * Toggle the state (of the model)
     */
    toggle (): void
}

export interface QChip extends ComponentPublicInstance {
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * QChip size name or a CSS unit including unit name
     */
    size? : string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    icon? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    iconRight? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    iconRemove? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    iconSelected? : string
    /**
     * Chip's content as string; overrides default slot if specified
     */
    label? : string | number
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     */
    textColor? : string
    /**
     * Model of the component determining if QChip should be rendered or not
     */
    modelValue? : boolean
    /**
     * Model for QChip if it's selected or not
     */
    selected? : boolean
    /**
     * Sets a low value for border-radius instead of the default one, making it close to a square
     */
    square? : boolean
    /**
     * Display using the 'outline' design
     */
    outline? : boolean
    /**
     * Is QChip clickable? If it's the case, then it will add hover effects and emit 'click' events
     */
    clickable? : boolean
    /**
     * If set, then it displays a 'remove' icon that when clicked the QChip emits 'remove' event
     */
    removable? : boolean
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     */
    ripple? : boolean | LooseDictionary
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
    /**
     * Put component in disabled mode
     */
    disable? : boolean
}

export interface QCircularProgress extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Current progress (must be between min/max)
     */
    value? : number
    /**
     * Minimum value defining 'no progress' (must be lower than 'max')
     */
    min? : number
    /**
     * Maximum value defining 100% progress made (must be higher than 'min')
     */
    max? : number
    /**
     * Color name for the arc progress from the Quasar Color Palette
     */
    color? : string
    /**
     * Color name for the center part of the component from the Quasar Color Palette
     */
    centerColor? : string
    /**
     * Color name for the track of the component from the Quasar Color Palette
     */
    trackColor? : string
    /**
     * Size of text in CSS units, including unit name. Suggestion: use 'em' units to sync with component size
     */
    fontSize? : string
    /**
     * Thickness of progress arc as a ratio (0.0 < x < 1.0) of component size
     */
    thickness? : number
    /**
     * Angle to rotate progress arc by
     */
    angle? : number
    /**
     * Put component into 'indeterminate' state; Ignores 'value' prop
     */
    indeterminate? : boolean
    /**
     * Enables the default slot and uses it (if available), otherwise it displays the 'value' prop as text; Make sure the text has enough space to be displayed inside the component
     */
    showValue? : boolean
    /**
     * Reverses the direction of progress; Only for determined state
     */
    reverse? : boolean
    /**
     * No animation when model changes
     */
    instantFeedback? : boolean
}

export interface QColor extends ComponentPublicInstance {
    /**
     * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
     */
    name? : string
    /**
     * Model of the component; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive
     */
    modelValue : string
    /**
     * The default value to show when the model doesn't have one
     */
    defaultValue? : string
    /**
     * The default view of the picker
     */
    defaultView? : 'spectrum' | 'tune' | 'palette'
    /**
     * Forces a certain model format upon the model
     */
    formatModel? : 'auto' | 'hex' | 'rgb' | 'hexa' | 'rgba'
    /**
     * Use a custom palette of colors for the palette tab
     */
    palette? : any[]
    /**
     * Removes border-radius so borders are squared
     */
    square? : boolean
    /**
     * Applies a 'flat' design (no default shadow)
     */
    flat? : boolean
    /**
     * Applies a default border to the component
     */
    bordered? : boolean
    /**
     * Do not render header
     */
    noHeader? : boolean
    /**
     * Do not render footer; Useful when you want a specific view ('default-view' prop) and don't want the user to be able to switch it
     */
    noFooter? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Put component in readonly mode
     */
    readonly? : boolean
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
}

export interface QDate extends ComponentPublicInstance {
    /**
     * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
     */
    name? : string
    /**
     * Display the component in landscape mode
     */
    landscape? : boolean
    /**
     * Mask (formatting string) used for parsing and formatting value
     */
    mask? : string
    /**
     * Locale formatting options
     */
    locale? : {
            /**
             * List of full day names (DDDD), starting with Sunday
             */
            days? : any[]
            /**
             * List of short day names (DDD), starting with Sunday
             */
            daysShort? : any[]
            /**
             * List of full month names (MMMM), starting with January
             */
            months? : any[]
            /**
             * List of short month names (MMM), starting with January
             */
            monthsShort? : any[] }
    /**
     * Specify calendar type
     */
    calendar? : 'gregorian' | 'persian'
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     */
    textColor? : string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Removes border-radius so borders are squared
     */
    square? : boolean
    /**
     * Applies a 'flat' design (no default shadow)
     */
    flat? : boolean
    /**
     * Applies a default border to the component
     */
    bordered? : boolean
    /**
     * Put component in readonly mode
     */
    readonly? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Date(s) of the component; Must be Array if using 'multiple' prop; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive
     */
    modelValue : string | any[] | LooseDictionary
    /**
     * When specified, it overrides the default header title; Makes sense when not in 'minimal' mode
     */
    title? : string
    /**
     * When specified, it overrides the default header subtitle; Makes sense when not in 'minimal' mode
     */
    subtitle? : string
    /**
     * The default year and month to display (in YYYY/MM format) when model is unfilled (undefined or null); Please ensure it is within the navigation min/max year-month (if using them)
     */
    defaultYearMonth? : string
    /**
     * The view which will be displayed by default
     */
    defaultView? : 'Calendar' | 'Months' | 'Years'
    /**
     * Show the years selector in months view
     */
    yearsInMonthView? : boolean
    /**
     * A list of events to highlight on the calendar; If using a function, it receives the date as a String and must return a Boolean (matches or not); If using a function then for best performance, reference it from your scope and do not define it inline
     */
    events? : any[] | Function
    /**
     * Color name (from the Quasar Color Palette); If using a function, it receives the date as a String and must return a String (color for the received date); If using a function then for best performance, reference it from your scope and do not define it inline
     */
    eventColor? : string | Function
    /**
     * Optionally configure the days that are selectable; If using a function, it receives the date as a String and must return a Boolean (is date acceptable or not); If using a function then for best performance, reference it from your scope and do not define it inline; Incompatible with 'range' prop
     */
    options? : any[] | Function
    /**
     * Lock user from navigating below a specific year+month (in YYYY/MM format); This prop is not used to correct the model; You might want to also use 'default-year-month' prop
     */
    navigationMinYearMonth? : string
    /**
     * Lock user from navigating above a specific year+month (in YYYY/MM format); This prop is not used to correct the model; You might want to also use 'default-year-month' prop
     */
    navigationMaxYearMonth? : string
    /**
     * Remove ability to unselect a date; It does not apply to selecting a range over already selected dates
     */
    noUnset? : boolean
    /**
     * Sets the day of the week that is considered the first day (0 - Sunday, 1 - Monday, ...); This day will show in the left-most column of the calendar
     */
    firstDayOfWeek? : string | number
    /**
     * Display a button that selects the current day
     */
    todayBtn? : boolean
    /**
     * Don’t display the header
     */
    minimal? : boolean
    /**
     * Allow multiple selection; Model must be Array
     */
    multiple? : boolean
    /**
     * Allow range selection; Partial compatibility with 'options' prop: selected ranges might also include 'unselectable' days
     */
    range? : boolean
    /**
     * Emit model when user browses month and year too; ONLY for single selection (non-multiple, non-range)
     */
    emitImmediately? : boolean
    /**
     * Change model to today
     */
    setToday (): void
    /**
     * Change current view
     * @param view QDate view name
     */
    setView (view : 'Calendar' | 'Months' | 'Years'): void
    /**
     * Increment or decrement calendar view's month or year
     * @param type What to increment/decrement
     * @param descending Decrement?
     */
    offsetCalendar (type : 'month' | 'year', descending? : boolean): void
    /**
     * Change current year and month of the Calendar view; It gets corrected if using navigation-min/max-year-month and sets the current view to Calendar
     * @param year The year
     * @param month The month
     */
    setCalendarTo (year? : number, month? : number): void
    /**
     * Configure the current editing range
     * @param from Definition of date from where the range begins
     * @param to Definition of date to where the range ends
     */
    setEditingRange (from? : {
            /**
             * The year
             */
            year? : number
            /**
             * The month
             */
            month? : number
            /**
             * The day of month
             */
            day? : number }, to? : {
            /**
             * The year
             */
            year? : number
            /**
             * The month
             */
            month? : number
            /**
             * The day of month
             */
            day? : number }): void
}

export interface QDialog extends ComponentPublicInstance {
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive
     */
    modelValue? : boolean
    /**
     * User cannot dismiss Dialog if clicking outside of it or hitting ESC key; Also, an app route change won't dismiss it
     */
    persistent? : boolean
    /**
     * User cannot dismiss Dialog by hitting ESC key; No need to set it if 'persistent' prop is also set
     */
    noEscDismiss? : boolean
    /**
     * User cannot dismiss Dialog by clicking outside of it; No need to set it if 'persistent' prop is also set
     */
    noBackdropDismiss? : boolean
    /**
     * Changing route app won't dismiss Dialog; No need to set it if 'persistent' prop is also set
     */
    noRouteDismiss? : boolean
    /**
     * Any click/tap inside of the dialog will close it
     */
    autoClose? : boolean
    /**
     * Put Dialog into seamless mode; Does not use a backdrop so user is able to interact with the rest of the page too
     */
    seamless? : boolean
    /**
     * Put Dialog into maximized mode
     */
    maximized? : boolean
    /**
     * Dialog will try to render with same width as the window
     */
    fullWidth? : boolean
    /**
     * Dialog will try to render with same height as the window
     */
    fullHeight? : boolean
    /**
     * Stick dialog to one of the sides (top, right, bottom or left)
     */
    position? : 'standard' | 'top' | 'right' | 'bottom' | 'left'
    /**
     * One of Quasar's embedded transitions
     */
    transitionShow? : string
    /**
     * One of Quasar's embedded transitions
     */
    transitionHide? : string
    /**
     * Forces content to have squared borders
     */
    square? : boolean
    /**
     * (Accessibility) When Dialog gets hidden, do not refocus on the DOM element that previously had focus
     */
    noRefocus? : boolean
    /**
     * (Accessibility) When Dialog gets shown, do not switch focus on it
     */
    noFocus? : boolean
    /**
     * Triggers component to show
     * @param evt JS event object
     */
    show (evt? : LooseDictionary): void
    /**
     * Triggers component to hide
     * @param evt JS event object
     */
    hide (evt? : LooseDictionary): void
    /**
     * Triggers component to toggle between show/hide
     * @param evt JS event object
     */
    toggle (evt? : LooseDictionary): void
    /**
     * Focus dialog; if you have content with autofocus attribute, it will directly focus it
     */
    focus (): void
    /**
     * Shakes dialog
     */
    shake (): void
}

export interface QDrawer extends ComponentPublicInstance {
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive
     */
    modelValue? : boolean
    /**
     * Side to attach to
     */
    side? : 'left' | 'right'
    /**
     * Puts drawer into overlay mode (does not occupy space on screen, narrowing the page)
     */
    overlay? : boolean
    /**
     * Width of drawer (in pixels)
     */
    width? : number
    /**
     * Puts drawer into mini mode
     */
    mini? : boolean
    /**
     * Width of drawer (in pixels) when in mini mode
     */
    miniWidth? : number
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Mini mode will expand as an overlay
     */
    miniToOverlay? : boolean
    /**
     * Breakpoint (in pixels) of layout width up to which mobile mode is used
     */
    breakpoint? : number
    /**
     * Overrides the default dynamic mode into which the drawer is put on
     */
    behavior? : 'default' | 'desktop' | 'mobile'
    /**
     * Applies a default border to the component
     */
    bordered? : boolean
    /**
     * Adds a default shadow to the header
     */
    elevated? : boolean
    /**
     * Prevents drawer from auto-closing when app's route changes
     */
    persistent? : boolean
    /**
     * Forces drawer to be shown on screen on initial render if the layout width is above breakpoint, regardless of v-model; This is the default behavior when SSR is taken over by client on initial render
     */
    showIfAbove? : boolean
    /**
     * Disables the default behavior where drawer can be swiped into view; Useful for iOS platforms where it might interfere with Safari's 'swipe to go to previous/next page' feature
     */
    noSwipeOpen? : boolean
    /**
     * Disables the default behavior where drawer can be swiped out of view (applies to drawer content only); Useful for iOS platforms where it might interfere with Safari's 'swipe to go to previous/next page' feature
     */
    noSwipeClose? : boolean
    /**
     * Disables the default behavior where drawer backdrop can be swiped
     */
    noSwipeBackdrop? : boolean
    /**
     * Triggers component to show
     * @param evt JS event object
     */
    show (evt? : LooseDictionary): void
    /**
     * Triggers component to hide
     * @param evt JS event object
     */
    hide (evt? : LooseDictionary): void
    /**
     * Triggers component to toggle between show/hide
     * @param evt JS event object
     */
    toggle (evt? : LooseDictionary): void
}

export interface QEditor extends ComponentPublicInstance {
    /**
     * Fullscreen mode
     */
    fullscreen? : boolean
    /**
     * Changing route app won't exit fullscreen
     */
    noRouteFullscreenExit? : boolean
    /**
     * Model of the component; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     */
    modelValue : string
    /**
     * Put component in readonly mode
     */
    readonly? : boolean
    /**
     * Removes border-radius so borders are squared
     */
    square? : boolean
    /**
     * Applies a 'flat' design (no borders)
     */
    flat? : boolean
    /**
     * Dense mode; toolbar buttons are shown on one-line only
     */
    dense? : boolean
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * CSS unit for the minimum height of the editable area
     */
    minHeight? : string
    /**
     * CSS unit for maximum height of the input area
     */
    maxHeight? : string
    /**
     * CSS value to set the height of the editable area
     */
    height? : string
    /**
     * Definition of commands and their buttons to be included in the 'toolbar' prop
     */
    definitions? : {
            /**
             * Label of the button
             */
            label? : string
            /**
             * Text to be displayed as a tooltip on hover
             */
            tip? : string
            /**
             * HTML formatted text to be displayed within a tooltip on hover
             */
            htmlTip? : string
            /**
             * Icon of the button
             */
            icon? : string
            /**
             * Keycode of a key to be used together with the <ctrl> key for use as a shortcut to trigger this element
             */
            key? : number
            /**
             * Either this or "cmd" is required. Function for when button gets clicked/tapped.
             */
            handler? : Function
            /**
             * Either this or "handler" is required. This must be a valid execCommand method according to the designMode API.
             */
            cmd? : string
            /**
             * Only set a param if using a "cmd". This is commonly text or HTML to inject, but is highly dependent upon the specific cmd being called.
             */
            param? : string
            /**
             * Is button disabled? If specifying a function, return a Boolean value.
             */
            disable? : boolean | Function
            /**
             * Pass the value "no-state" if the button should not have an "active" state
             */
            type? : 'no-state'
            /**
             * Lock the button label, so it doesn't change based on the child option selected.
             */
            fixedLabel? : boolean
            /**
             * Lock the button icon, so it doesn't change based on the child option selected.
             */
            fixedIcon? : boolean
            /**
             * Highlight the toolbar button, when a child option has been selected.
             */
            highlight? : boolean }
    /**
     * Object with definitions of fonts
     */
    fonts? : LooseDictionary
    /**
     * An array of arrays of Objects/Strings that you use to define the construction of the elements and commands available in the toolbar
     */
    toolbar? : any[]
    /**
     * Font color (from the Quasar Palette) of buttons and text in the toolbar
     */
    toolbarColor? : string
    /**
     * Text color (from the Quasar Palette) of toolbar commands
     */
    toolbarTextColor? : string
    /**
     * Choose the active color (from the Quasar Palette) of toolbar commands button
     */
    toolbarToggleColor? : string
    /**
     * Toolbar background color (from Quasar Palette)
     */
    toolbarBg? : string
    /**
     * Toolbar buttons are rendered "outlined"
     */
    toolbarOutline? : boolean
    /**
     * Toolbar buttons are rendered as a "push-button" type
     */
    toolbarPush? : boolean
    /**
     * Toolbar buttons are rendered "rounded"
     */
    toolbarRounded? : boolean
    /**
     * Paragraph tag to be used
     */
    paragraphTag? : 'div' | 'p'
    /**
     * Object with CSS properties and values for styling the container of QEditor
     */
    contentStyle? : LooseDictionary
    /**
     * CSS classes for the input area
     */
    contentClass? : LooseDictionary | any[] | string
    /**
     * Text to display as placeholder
     */
    placeholder? : string
    /**
     * Toggle the view to be fullscreen or not fullscreen
     */
    toggleFullscreen (): void
    /**
     * Enter the fullscreen view
     */
    setFullscreen (): void
    /**
     * Leave the fullscreen view
     */
    exitFullscreen (): void
    /**
     * Run contentEditable command at caret position and range
     * @param cmd Must be a valid execCommand method according to the designMode API
     * @param param The argument to pass to the command
     * @param update Refresh the toolbar
     */
    runCmd (cmd : string, param? : string, update? : boolean): void
    /**
     * Hide the link editor if visible and force the instance to re-render
     */
    refreshToolbar (): void
    /**
     * Focus on the contentEditable at saved cursor position
     */
    focus (): void
    /**
     * Retrieve the content of the Editor
     * @returns Provides the pure HTML within the editable area
     */
    getContentEl (): Element
}

export interface QExpansionItem extends ComponentPublicInstance {
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     */
    to? : string | LooseDictionary
    /**
     * Equivalent to Vue Router <router-link> 'exact' property
     */
    exact? : boolean
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     */
    replace? : boolean
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     */
    activeClass? : string
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     */
    exactActiveClass? : string
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Model of the component defining 'open' state; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     */
    modelValue? : boolean
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    icon? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    expandIcon? : string
    /**
     * Expand icon name (following Quasar convention) for when QExpansionItem is expanded; When used, it also disables the rotation animation of the expand icon; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    expandedIcon? : string
    /**
     * Apply custom class(es) to the expand icon item section
     */
    expandIconClass? : any[] | string | LooseDictionary
    /**
     * Header label (unless using 'header' slot)
     */
    label? : string
    /**
     * Apply ellipsis when there's not enough space to render on the specified number of lines; If more than one line specified, then it will only work on webkit browsers because it uses the '-webkit-line-clamp' CSS property!
     */
    labelLines? : number | string
    /**
     * Header sub-label (unless using 'header' slot)
     */
    caption? : string
    /**
     * Apply ellipsis when there's not enough space to render on the specified number of lines; If more than one line specified, then it will only work on webkit browsers because it uses the '-webkit-line-clamp' CSS property!
     */
    captionLines? : number | string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Animation duration (in milliseconds)
     */
    duration? : number
    /**
     * Apply an inset to header (unless using 'header' slot); Useful when header avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu
     */
    headerInsetLevel? : number
    /**
     * Apply an inset to content (changes content padding)
     */
    contentInsetLevel? : number
    /**
     * Apply a top and bottom separator when expansion item is opened
     */
    expandSeparator? : boolean
    /**
     * Puts expansion item into open state on initial render; Overridden by v-model if used
     */
    defaultOpened? : boolean
    /**
     * Applies the expansion events to the expand icon only and not to the whole header
     */
    expandIconToggle? : boolean
    /**
     * Switch expand icon side (from default 'right' to 'left')
     */
    switchToggleSide? : boolean
    /**
     * Use dense mode for expand icon
     */
    denseToggle? : boolean
    /**
     * Register expansion item into a group (unique name that must be applied to all expansion items in that group) for coordinated open/close state within the group a.k.a. 'accordion mode'
     */
    group? : string
    /**
     * Put expansion list into 'popup' mode
     */
    popup? : boolean
    /**
     * Apply custom style to the header
     */
    headerStyle? : any[] | string | LooseDictionary
    /**
     * Apply custom class(es) to the header
     */
    headerClass? : any[] | string | LooseDictionary
    /**
     * Triggers component to show
     * @param evt JS event object
     */
    show (evt? : LooseDictionary): void
    /**
     * Triggers component to hide
     * @param evt JS event object
     */
    hide (evt? : LooseDictionary): void
    /**
     * Triggers component to toggle between show/hide
     * @param evt JS event object
     */
    toggle (evt? : LooseDictionary): void
}

export interface QFab extends ComponentPublicInstance {
    /**
     * Define the button HTML DOM type
     */
    type? : 'a' | 'submit' | 'button' | 'reset'
    /**
     * Use 'outline' design for Fab button
     */
    outline? : boolean
    /**
     * Use 'push' design for Fab button
     */
    push? : boolean
    /**
     * Use 'flat' design for Fab button
     */
    flat? : boolean
    /**
     * Remove shadow
     */
    unelevated? : boolean
    /**
     * Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set
     */
    padding? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     */
    textColor? : string
    /**
     * Apply the glossy effect over the button
     */
    glossy? : boolean
    /**
     * Display label besides the FABs, as external content
     */
    externalLabel? : boolean
    /**
     * The label that will be shown when Fab is extended
     */
    label? : string | number
    /**
     * Position of the label around the icon
     */
    labelPosition? : 'top' | 'right' | 'bottom' | 'left'
    /**
     * Hide the label; Useful for animation purposes where you toggle the visibility of the label
     */
    hideLabel? : boolean
    /**
     * Class definitions to be attributed to the label container
     */
    labelClass? : any[] | string | LooseDictionary
    /**
     * Style definitions to be attributed to the label container
     */
    labelStyle? : any[] | string | LooseDictionary
    /**
     * Apply a rectangle aspect to the FAB
     */
    square? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
    /**
     * Controls state of fab actions (showing/hidden); Works best with v-model directive, otherwise use along listening to 'update:modelValue' event
     */
    modelValue? : boolean
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    icon? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    activeIcon? : string
    /**
     * Hide the icon (don't use any)
     */
    hideIcon? : boolean
    /**
     * Direction to expand Fab Actions to
     */
    direction? : 'up' | 'right' | 'down' | 'left'
    /**
     * The side of the Fab where Fab Actions will expand (only when direction is 'up' or 'down')
     */
    verticalActionsAlign? : 'left' | 'center' | 'right'
    /**
     * By default, Fab Actions are hidden when user navigates to another route and this prop disables this behavior
     */
    persistent? : boolean
    /**
     * Expands fab actions list
     * @param evt JS event object
     */
    show (evt? : LooseDictionary): void
    /**
     * Collapses fab actions list
     * @param evt JS event object
     */
    hide (evt? : LooseDictionary): void
    /**
     * Triggers component to toggle between show/hide
     * @param evt JS event object
     */
    toggle (evt? : LooseDictionary): void
}

export interface QFabAction extends ComponentPublicInstance {
    /**
     * Define the button HTML DOM type
     */
    type? : 'a' | 'submit' | 'button' | 'reset'
    /**
     * Use 'outline' design for Fab button
     */
    outline? : boolean
    /**
     * Use 'push' design for Fab button
     */
    push? : boolean
    /**
     * Use 'flat' design for Fab button
     */
    flat? : boolean
    /**
     * Remove shadow
     */
    unelevated? : boolean
    /**
     * Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set
     */
    padding? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     */
    textColor? : string
    /**
     * Apply the glossy effect over the button
     */
    glossy? : boolean
    /**
     * Display label besides the FABs, as external content
     */
    externalLabel? : boolean
    /**
     * The label that will be shown when Fab is extended
     */
    label? : string | number
    /**
     * Position of the label around the icon
     */
    labelPosition? : 'top' | 'right' | 'bottom' | 'left'
    /**
     * Hide the label; Useful for animation purposes where you toggle the visibility of the label
     */
    hideLabel? : boolean
    /**
     * Class definitions to be attributed to the label container
     */
    labelClass? : any[] | string | LooseDictionary
    /**
     * Style definitions to be attributed to the label container
     */
    labelStyle? : any[] | string | LooseDictionary
    /**
     * Apply a rectangle aspect to the FAB
     */
    square? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    icon? : string
    /**
     * How to align the Fab Action relative to Fab expand side; By default it uses the align specified in QFab
     */
    anchor? : 'start' | 'center' | 'end'
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     */
    to? : string | LooseDictionary
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     */
    replace? : boolean
    /**
     * Emulate click on QFabAction
     * @param evt JS event object
     */
    click (evt? : LooseDictionary): void
}

export interface QField extends ComponentPublicInstance {
    /**
     * Model of the component; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive
     */
    modelValue? : any
    /**
     * Does field have validation errors?
     */
    error? : boolean
    /**
     * Validation error message (gets displayed only if 'error' is set to 'true')
     */
    errorMessage? : string
    /**
     * Hide error icon when there is an error
     */
    noErrorIcon? : boolean
    /**
     * Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules
     */
    rules? : any[]
    /**
     * By default a change in the rules does not trigger a new validation until the model changes; If set to true then a change in the rules will trigger a validation; Has a performance penalty, so use it only when you really need it
     */
    reactiveRules? : boolean
    /**
     * If set to boolean true then it checks validation status against the 'rules' only after field loses focus for first time; If set to 'ondemand' then it will trigger only when component's validate() method is manually called or when the wrapper QForm submits itself
     */
    lazyRules? : boolean | 'ondemand'
    /**
     * A text label that will “float” up above the input field, once the field gets focus
     */
    label? : string
    /**
     * Label will be always shown above the field regardless of field content (if any)
     */
    stackLabel? : boolean
    /**
     * Helper (hint) text which gets placed below your wrapped form component
     */
    hint? : string
    /**
     * Hide the helper (hint) text when field doesn't have focus
     */
    hideHint? : boolean
    /**
     * Prefix
     */
    prefix? : string
    /**
     * Suffix
     */
    suffix? : string
    /**
     * Color name for the label from the Quasar Color Palette; Overrides the 'color' prop; The difference from 'color' prop is that the label will always have this color, even when field is not focused
     */
    labelColor? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    bgColor? : string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Signals the user a process is in progress by displaying a spinner; Spinner can be customized by using the 'loading' slot.
     */
    loading? : boolean
    /**
     * Appends clearable icon when a value (not undefined or null) is set; When clicked, model becomes null
     */
    clearable? : boolean
    /**
     * Custom icon to use for the clear button when using along with 'clearable' prop
     */
    clearIcon? : string
    /**
     * Use 'filled' design for the field
     */
    filled? : boolean
    /**
     * Use 'outlined' design for the field
     */
    outlined? : boolean
    /**
     * Use 'borderless' design for the field
     */
    borderless? : boolean
    /**
     * Use 'standout' design for the field; Specifies classes to be applied when focused (overriding default ones)
     */
    standout? : boolean | string
    /**
     * Enables label slot; You need to set it to force use of the 'label' slot if the 'label' prop is not set
     */
    labelSlot? : boolean
    /**
     * Enables bottom slots ('error', 'hint', 'counter')
     */
    bottomSlots? : boolean
    /**
     * Do not reserve space for hint/error/counter anymore when these are not used; As a result, it also disables the animation for those; It also allows the hint/error area to stretch vertically based on its content
     */
    hideBottomSpace? : boolean
    /**
     * Show an automatic counter on bottom right
     */
    counter? : boolean
    /**
     * Applies a small standard border-radius for a squared shape of the component
     */
    rounded? : boolean
    /**
     * Remove border-radius so borders are squared; Overrides 'rounded' prop
     */
    square? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Match inner content alignment to that of QItem
     */
    itemAligned? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Put component in readonly mode
     */
    readonly? : boolean
    /**
     * Focus field on initial component render
     */
    autofocus? : boolean
    /**
     * Used to specify the 'id' of the control and also the 'for' attribute of the label that wraps it; If no 'name' prop is specified, then it is used for this attribute as well
     */
    for? : string
    /**
     * Used to specify the name of the control; Useful if dealing with forms; If not specified, it takes the value of 'for' prop, if it exists
     */
    name? : string
    /**
     * Specify a max length of model
     */
    maxlength? : string | number
    /**
     * Reset validation status
     */
    resetValidation (): void
    /**
     * Trigger a validation
     * @param value Optional value to validate against
     * @returns True/false if no async rules, otherwise a Promise with the outcome (true -> validation was a success, false -> invalid models detected)
     */
    validate (value? : any): boolean | Promise<boolean>
    /**
     * Focus field
     */
    focus (): void
    /**
     * Blur field (lose focus)
     */
    blur (): void
}

export interface QFile extends ComponentPublicInstance {
    /**
     * Used to specify the name of the control; Useful if dealing with forms; If not specified, it takes the value of 'for' prop, if it exists
     */
    name? : string
    /**
     * Allow multiple file uploads
     */
    multiple? : boolean
    /**
     * Comma separated list of unique file type specifiers. Maps to 'accept' attribute of native input type=file element
     */
    accept? : string
    /**
     * Optionally, specify that a new file should be captured, and which device should be used to capture that new media of a type defined by the 'accept' prop. Maps to 'capture' attribute of native input type=file element
     */
    capture? : 'user' | 'environment'
    /**
     * Maximum size of individual file in bytes
     */
    maxFileSize? : number | string
    /**
     * Maximum size of all files combined in bytes
     */
    maxTotalSize? : number | string
    /**
     * Maximum number of files to contain
     */
    maxFiles? : number | string
    /**
     * Custom filter for added files; Only files that pass this filter will be added to the queue and uploaded; For best performance, reference it from your scope and do not define it inline
     */
    filter? : Function
    /**
     * Model of the component; Must be FileList or Array if using 'multiple' prop; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     */
    modelValue : File | FileList | any[]
    /**
     * Does field have validation errors?
     */
    error? : boolean
    /**
     * Validation error message (gets displayed only if 'error' is set to 'true')
     */
    errorMessage? : string
    /**
     * Hide error icon when there is an error
     */
    noErrorIcon? : boolean
    /**
     * Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules
     */
    rules? : any[]
    /**
     * By default a change in the rules does not trigger a new validation until the model changes; If set to true then a change in the rules will trigger a validation; Has a performance penalty, so use it only when you really need it
     */
    reactiveRules? : boolean
    /**
     * If set to boolean true then it checks validation status against the 'rules' only after field loses focus for first time; If set to 'ondemand' then it will trigger only when component's validate() method is manually called or when the wrapper QForm submits itself
     */
    lazyRules? : boolean | 'ondemand'
    /**
     * A text label that will “float” up above the input field, once the field gets focus
     */
    label? : string
    /**
     * Label will be always shown above the field regardless of field content (if any)
     */
    stackLabel? : boolean
    /**
     * Helper (hint) text which gets placed below your wrapped form component
     */
    hint? : string
    /**
     * Hide the helper (hint) text when field doesn't have focus
     */
    hideHint? : boolean
    /**
     * Prefix
     */
    prefix? : string
    /**
     * Suffix
     */
    suffix? : string
    /**
     * Color name for the label from the Quasar Color Palette; Overrides the 'color' prop; The difference from 'color' prop is that the label will always have this color, even when field is not focused
     */
    labelColor? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    bgColor? : string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Signals the user a process is in progress by displaying a spinner; Spinner can be customized by using the 'loading' slot.
     */
    loading? : boolean
    /**
     * Appends clearable icon when a value (not undefined or null) is set; When clicked, model becomes null
     */
    clearable? : boolean
    /**
     * Custom icon to use for the clear button when using along with 'clearable' prop
     */
    clearIcon? : string
    /**
     * Use 'filled' design for the field
     */
    filled? : boolean
    /**
     * Use 'outlined' design for the field
     */
    outlined? : boolean
    /**
     * Use 'borderless' design for the field
     */
    borderless? : boolean
    /**
     * Use 'standout' design for the field; Specifies classes to be applied when focused (overriding default ones)
     */
    standout? : boolean | string
    /**
     * Enables label slot; You need to set it to force use of the 'label' slot if the 'label' prop is not set
     */
    labelSlot? : boolean
    /**
     * Enables bottom slots ('error', 'hint', 'counter')
     */
    bottomSlots? : boolean
    /**
     * Do not reserve space for hint/error/counter anymore when these are not used; As a result, it also disables the animation for those; It also allows the hint/error area to stretch vertically based on its content
     */
    hideBottomSpace? : boolean
    /**
     * Show an automatic counter on bottom right
     */
    counter? : boolean
    /**
     * Applies a small standard border-radius for a squared shape of the component
     */
    rounded? : boolean
    /**
     * Remove border-radius so borders are squared; Overrides 'rounded' prop
     */
    square? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Match inner content alignment to that of QItem
     */
    itemAligned? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Put component in readonly mode
     */
    readonly? : boolean
    /**
     * Focus field on initial component render
     */
    autofocus? : boolean
    /**
     * Used to specify the 'id' of the control and also the 'for' attribute of the label that wraps it; If no 'name' prop is specified, then it is used for this attribute as well
     */
    for? : string
    /**
     * Append file(s) to current model rather than replacing them; Has effect only when using 'multiple' mode
     */
    append? : boolean
    /**
     * Override default selection string, if not using 'file' or 'selected' scoped slots and if not using 'use-chips' prop
     */
    displayValue? : number | string
    /**
     * Use QChip to show picked files
     */
    useChips? : boolean
    /**
     * Label for the counter; The 'counter' prop is necessary to enable this one
     */
    counterLabel? : Function
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
    /**
     * Class definitions to be attributed to the underlying selection container
     */
    inputClass? : any[] | string | LooseDictionary
    /**
     * Style definitions to be attributed to the underlying selection container
     */
    inputStyle? : any[] | string | LooseDictionary
    /**
     * Trigger file pick; Must be called as a direct consequence of user interaction (eg. in a click handler), due to browsers security policy
     * @param evt JS event object
     */
    pickFiles (evt? : LooseDictionary): void
    /**
     * Add files programmatically
     * @param files Array of files (instances of File)
     */
    addFiles (files : FileList | any[]): void
    /**
     * Reset validation status
     */
    resetValidation (): void
    /**
     * Trigger a validation
     * @param value Optional value to validate against
     * @returns True/false if no async rules, otherwise a Promise with the outcome (true -> validation was a success, false -> invalid models detected)
     */
    validate (value? : any): boolean | Promise<boolean>
    /**
     * Focus component
     */
    focus (): void
    /**
     * Blur component (lose focus)
     */
    blur (): void
    /**
     * Remove file located at specific index in the model
     * @param index Index at which to remove selection
     */
    removeAtIndex (index : number): void
    /**
     * Remove specified file from the model
     * @param file File to remove (instance of File)
     */
    removeFile (file : File): void
    /**
     * Get the native input DOM Element
     * @returns The underlying native input DOM Element
     */
    getNativeElement (): LooseDictionary
}

export interface QFooter extends ComponentPublicInstance {
    /**
     * Model of the component defining if it is shown or hidden to the user; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     */
    modelValue? : boolean
    /**
     * Enable 'reveal' mode; Takes into account user scroll to temporarily show/hide footer
     */
    reveal? : boolean
    /**
     * Applies a default border to the component
     */
    bordered? : boolean
    /**
     * Adds a default shadow to the footer
     */
    elevated? : boolean
    /**
     * When using SSR, you can optionally hint of the height (in pixels) of the QFooter
     */
    heightHint? : number | string
}

export interface QForm extends ComponentPublicInstance {
    /**
     * Focus first focusable element on initial component render
     */
    autofocus? : boolean
    /**
     * Do not try to focus on first component that has a validation error when submitting form
     */
    noErrorFocus? : boolean
    /**
     * Do not try to focus on first component when resetting form
     */
    noResetFocus? : boolean
    /**
     * Validate all fields in form (by default it stops after finding the first invalid field with synchronous validation)
     */
    greedy? : boolean
    /**
     * Focus on first focusable element/component in the form
     */
    focus (): void
    /**
     * Triggers a validation on all applicable inner Quasar components
     * @param shouldFocus Tell if it should focus or not on component with error on submitting form; Overrides 'no-focus-error' prop if specified
     * @returns Promise is always fulfilled and receives the outcome (true -> validation was a success, false -> invalid models detected)
     */
    validate (shouldFocus? : boolean): Promise<boolean>
    /**
     * Resets the validation on all applicable inner Quasar components
     */
    resetValidation (): void
    /**
     * Manually trigger form validation and submit
     * @param evt JS event object
     */
    submit (evt? : LooseDictionary): void
    /**
     * Manually trigger form reset
     * @param evt JS event object
     */
    reset (evt? : LooseDictionary): void
    /**
     * Get array of children vue components that support validation
     * @returns Vue components that support Quasar validation API
     */
    getValidationComponents (): any[]
}

export interface QFormChildMixin extends ComponentPublicInstance {
    /**
     * Needs to be overwritten when getting extended/mixed in
     * @returns Promise is always fulfilled and receives the outcome (true -> validation was a success, false -> invalid models detected)
     */
    validate (): boolean | Promise<boolean>
    /**
     * Needs to be overwritten when getting extended/mixed in
     */
    resetValidation (): void
}

export interface QHeader extends ComponentPublicInstance {
    /**
     * Model of the component defining if it is shown or hidden to the user; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     */
    modelValue? : boolean
    /**
     * Enable 'reveal' mode; Takes into account user scroll to temporarily show/hide header
     */
    reveal? : boolean
    /**
     * Amount of scroll (in pixels) that should trigger a 'reveal' state change
     */
    revealOffset? : number
    /**
     * Applies a default border to the component
     */
    bordered? : boolean
    /**
     * Adds a default shadow to the header
     */
    elevated? : boolean
    /**
     * When using SSR, you can optionally hint of the height (in pixels) of the QHeader
     */
    heightHint? : number | string
}

export interface QIcon extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * HTML tag to render, unless no icon is supplied or it's an svg icon
     */
    tag? : string
    /**
     * Name of the icon, following Quasar convention
     */
    name? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Useful if icon is on the left side of something: applies a standard margin on the right side of Icon
     */
    left? : boolean
    /**
     * Useful if icon is on the right side of something: applies a standard margin on the left side of Icon
     */
    right? : boolean
}

export interface QImg extends ComponentPublicInstance {
    /**
     * Force the component to maintain an aspect ratio
     */
    ratio? : string | number | string | number
    /**
     * Path to image
     */
    src? : string
    /**
     * Same syntax as <img> srcset attribute
     */
    srcset? : string
    /**
     * Same syntax as <img> sizes attribute
     */
    sizes? : string
    /**
     * While waiting for your image to load, you can use a placeholder image
     */
    placeholderSrc? : string
    /**
     * Use it when not specifying 'ratio' but still wanting an initial aspect ratio
     */
    initialRatio? : string | number
    /**
     * Forces image width; Must also include the unit (px or %)
     */
    width? : string
    /**
     * Forces image height; Must also include the unit (px or %)
     */
    height? : string
    /**
     * Lazy or immediate load; Same syntax as <img> loading attribute
     */
    loading? : 'lazy' | 'eager'
    /**
     * Same syntax as <img> crossorigin attribute
     */
    crossorigin? : 'anonymous' | 'use-credentials'
    /**
     * How the image will fit into the container; Equivalent of the object-fit prop; Can be coordinated with 'position' prop
     */
    fit? : 'cover' | 'fill' | 'contain' | 'none' | 'scale-down'
    /**
     * The alignment of the image into the container; Equivalent of the object-position CSS prop
     */
    position? : string
    /**
     * Specifies an alternate text for the image, if the image cannot be displayed
     */
    alt? : string
    /**
     * Adds the native 'draggable' attribute
     */
    draggable? : boolean
    /**
     * CSS classes to be attributed to the native img element
     */
    imgClass? : string
    /**
     * Apply CSS to the native img element
     */
    imgStyle? : LooseDictionary
    /**
     * Color name for default Spinner (unless using a 'loading' slot)
     */
    spinnerColor? : string
    /**
     * Size in CSS units, including unit name, for default Spinner (unless using a 'loading' slot)
     */
    spinnerSize? : string
    /**
     * Do not display the default spinner while waiting for the image to be loaded; It is overriden by the 'loading' slot when one is present
     */
    noSpinner? : boolean
    /**
     * Disables the native context menu for the image
     */
    noNativeMenu? : boolean
    /**
     * Disable default transition when switching between old and new image
     */
    noTransition? : boolean
}

export interface QInfiniteScroll extends ComponentPublicInstance {
    /**
     * Offset (pixels) to bottom of Infinite Scroll container from which the component should start loading more content in advance
     */
    offset? : number
    /**
     * Debounce amount (in milliseconds)
     */
    debounce? : string | number
    /**
     * Initialize the pagination index (used for the @load event)
     */
    initialIndex? : number
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one
     */
    scrollTarget? : Element | string
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Scroll area should behave like a messenger - starting scrolled to bottom and loading when reaching the top
     */
    reverse? : boolean
    /**
     * Checks scroll position and loads more content if necessary
     */
    poll (): void
    /**
     * Tells Infinite Scroll to load more content, regardless of the scroll position
     */
    trigger (): void
    /**
     * Resets calling index to 0
     */
    reset (): void
    /**
     * Stops working, regardless of scroll position
     */
    stop (): void
    /**
     * Starts working. Checks scroll position upon call and if trigger is hit, it loads more content
     */
    resume (): void
    /**
     * Overwrite the current pagination index
     */
    setIndex (): void
    /**
     * Updates the scroll target; Useful when the parent elements change so that the scrolling target also changes
     */
    updateScrollTarget (): void
}

export interface QInnerLoading extends ComponentPublicInstance {
    /**
     * One of Quasar's embedded transitions
     */
    transitionShow? : string
    /**
     * One of Quasar's embedded transitions
     */
    transitionHide? : string
    /**
     * Transition duration (in milliseconds, without unit)
     */
    transitionDuration? : string | number
    /**
     * Size in CSS units, including unit name, or standard size name (xs|sm|md|lg|xl), for the inner Spinner (unless using the default slot)
     */
    size? : string
    /**
     * State - loading or not
     */
    showing? : boolean
    /**
     * Color name for component from the Quasar Color Palette for the inner Spinner (unless using the default slot)
     */
    color? : string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
}

export interface QInput extends ComponentPublicInstance {
    /**
     * Used to specify the name of the control; Useful if dealing with forms; If not specified, it takes the value of 'for' prop, if it exists
     */
    name? : string
    /**
     * Custom mask or one of the predefined mask names
     */
    mask? : string
    /**
     * Fills string with specified characters (or underscore if value is not string) to fill mask's length
     */
    fillMask? : boolean | string
    /**
     * Fills string from the right side of the mask
     */
    reverseFillMask? : boolean
    /**
     * Model will be unmasked (won't contain tokens/separation characters)
     */
    unmaskedValue? : boolean
    /**
     * Model of the component; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     */
    modelValue : string | number
    /**
     * Does field have validation errors?
     */
    error? : boolean
    /**
     * Validation error message (gets displayed only if 'error' is set to 'true')
     */
    errorMessage? : string
    /**
     * Hide error icon when there is an error
     */
    noErrorIcon? : boolean
    /**
     * Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules
     */
    rules? : any[]
    /**
     * By default a change in the rules does not trigger a new validation until the model changes; If set to true then a change in the rules will trigger a validation; Has a performance penalty, so use it only when you really need it
     */
    reactiveRules? : boolean
    /**
     * If set to boolean true then it checks validation status against the 'rules' only after field loses focus for first time; If set to 'ondemand' then it will trigger only when component's validate() method is manually called or when the wrapper QForm submits itself
     */
    lazyRules? : boolean | 'ondemand'
    /**
     * A text label that will “float” up above the input field, once the field gets focus
     */
    label? : string
    /**
     * Label will be always shown above the field regardless of field content (if any)
     */
    stackLabel? : boolean
    /**
     * Helper (hint) text which gets placed below your wrapped form component
     */
    hint? : string
    /**
     * Hide the helper (hint) text when field doesn't have focus
     */
    hideHint? : boolean
    /**
     * Prefix
     */
    prefix? : string
    /**
     * Suffix
     */
    suffix? : string
    /**
     * Color name for the label from the Quasar Color Palette; Overrides the 'color' prop; The difference from 'color' prop is that the label will always have this color, even when field is not focused
     */
    labelColor? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    bgColor? : string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Signals the user a process is in progress by displaying a spinner; Spinner can be customized by using the 'loading' slot.
     */
    loading? : boolean
    /**
     * Appends clearable icon when a value (not undefined or null) is set; When clicked, model becomes null
     */
    clearable? : boolean
    /**
     * Custom icon to use for the clear button when using along with 'clearable' prop
     */
    clearIcon? : string
    /**
     * Use 'filled' design for the field
     */
    filled? : boolean
    /**
     * Use 'outlined' design for the field
     */
    outlined? : boolean
    /**
     * Use 'borderless' design for the field
     */
    borderless? : boolean
    /**
     * Use 'standout' design for the field; Specifies classes to be applied when focused (overriding default ones)
     */
    standout? : boolean | string
    /**
     * Enables label slot; You need to set it to force use of the 'label' slot if the 'label' prop is not set
     */
    labelSlot? : boolean
    /**
     * Enables bottom slots ('error', 'hint', 'counter')
     */
    bottomSlots? : boolean
    /**
     * Do not reserve space for hint/error/counter anymore when these are not used; As a result, it also disables the animation for those; It also allows the hint/error area to stretch vertically based on its content
     */
    hideBottomSpace? : boolean
    /**
     * Show an automatic counter on bottom right
     */
    counter? : boolean
    /**
     * Applies a small standard border-radius for a squared shape of the component
     */
    rounded? : boolean
    /**
     * Remove border-radius so borders are squared; Overrides 'rounded' prop
     */
    square? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Match inner content alignment to that of QItem
     */
    itemAligned? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Put component in readonly mode
     */
    readonly? : boolean
    /**
     * Focus field on initial component render
     */
    autofocus? : boolean
    /**
     * Used to specify the 'id' of the control and also the 'for' attribute of the label that wraps it; If no 'name' prop is specified, then it is used for this attribute as well
     */
    for? : string
    /**
     * Text to be displayed as shadow at the end of the text in the control; Does NOT applies to type=file
     */
    shadowText? : string
    /**
     * Input type
     */
    type? : 'text' | 'password' | 'textarea' | 'email' | 'search' | 'tel' | 'file' | 'number' | 'url' | 'time' | 'date'
    /**
     * Debounce amount (in milliseconds) when updating model
     */
    debounce? : string | number
    /**
     * Specify a max length of model
     */
    maxlength? : string | number
    /**
     * Make field autogrow along with its content (uses a textarea)
     */
    autogrow? : boolean
    /**
     * Class definitions to be attributed to the underlying input tag
     */
    inputClass? : any[] | string | LooseDictionary
    /**
     * Style definitions to be attributed to the underlying input tag
     */
    inputStyle? : any[] | string | LooseDictionary
    /**
     * Reset validation status
     */
    resetValidation (): void
    /**
     * Trigger a validation
     * @param value Optional value to validate against
     * @returns True/false if no async rules, otherwise a Promise with the outcome (true -> validation was a success, false -> invalid models detected)
     */
    validate (value? : any): boolean | Promise<boolean>
    /**
     * Focus underlying input tag
     */
    focus (): void
    /**
     * Lose focus on underlying input tag
     */
    blur (): void
    /**
     * Select input text
     */
    select (): void
    /**
     * Get the native input/textarea DOM Element
     * @returns The underlying native input/textarea DOM Element
     */
    getNativeElement (): LooseDictionary
}

export interface QIntersection extends ComponentPublicInstance {
    /**
     * HTML tag to use
     */
    tag? : string
    /**
     * Get triggered only once
     */
    once? : boolean
    /**
     * Pre-render content on server side if using SSR (use it to pre-render above the fold content)
     */
    ssrPrerender? : boolean
    /**
     * [Intersection API root prop] Lets you define an alternative to the viewport as your root (through its DOM element); It is important to keep in mind that root needs to be an ancestor of the observed element
     */
    root? : Element
    /**
     * [Intersection API rootMargin prop] Allows you to specify the margins for the root, effectively allowing you to either grow or shrink the area used for intersections
     */
    margin? : string
    /**
     * [Intersection API threshold prop] Threshold(s) at which to trigger, specified as a ratio, or list of ratios, of (visible area / total area) of the observed element
     */
    threshold? : any[] | number
    /**
     * One of Quasar's embedded transitions
     */
    transition? : string
    /**
     * Disable visibility observable (content will remain as it was, visible or hidden)
     */
    disable? : boolean
}

export interface QItem extends ComponentPublicInstance {
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     */
    to? : string | LooseDictionary
    /**
     * Equivalent to Vue Router <router-link> 'exact' property
     */
    exact? : boolean
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     */
    replace? : boolean
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     */
    activeClass? : string
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     */
    exactActiveClass? : string
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Put item into 'active' state
     */
    active? : boolean
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Is QItem clickable? If it's the case, then it will add hover effects and emit 'click' events
     */
    clickable? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Apply an inset; Useful when avatar/left side is missing but you want to align content with other items that do have a left side, or when you're building a menu
     */
    insetLevel? : number
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
    /**
     * HTML tag to render; Suggestion: use 'label' when encapsulating a QCheckbox/QRadio/QToggle so that when user clicks/taps on the whole item it will trigger a model change for the mentioned components
     */
    tag? : string
    /**
     * Put item into a manual focus state; Enables 'focused' prop which will determine if item is focused or not, rather than relying on native hover/focus states
     */
    manualFocus? : boolean
    /**
     * Determines focus state, ONLY if 'manual-focus' is enabled / set to true
     */
    focused? : boolean
}

export interface QItemLabel extends ComponentPublicInstance {
    /**
     * Renders an overline label
     */
    overline? : boolean
    /**
     * Renders a caption label
     */
    caption? : boolean
    /**
     * Renders a header label
     */
    header? : boolean
    /**
     * Apply ellipsis when there's not enough space to render on the specified number of lines;
     */
    lines? : number | string
}

export interface QItemSection extends ComponentPublicInstance {
    /**
     * Render an avatar item side (does not needs 'side' prop to be set)
     */
    avatar? : boolean
    /**
     * Render a thumbnail item side (does not needs 'side' prop to be set)
     */
    thumbnail? : boolean
    /**
     * Renders as a side of the item
     */
    side? : boolean
    /**
     * Align content to top (useful for multi-line items)
     */
    top? : boolean
    /**
     * Do not wrap text (useful for item's main content)
     */
    noWrap? : boolean
}

export interface QList extends ComponentPublicInstance {
    /**
     * Applies a default border to the component
     */
    bordered? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Applies a separator between contained items
     */
    separator? : boolean
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Applies a material design-like padding on top and bottom
     */
    padding? : boolean
}

export interface QKnob extends ComponentPublicInstance {
    /**
     * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
     */
    name? : string
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Any number to indicate the given value of the knob. Either use this property (along with a listener for 'update:modelValue' event) OR use the v-model directive
     */
    modelValue : number
    /**
     * The minimum value that the model (the knob value) should start at
     */
    min? : number
    /**
     * The maximum value that the model (the knob value) should go to
     */
    max? : number
    /**
     * A number representing steps in the value of the model, while adjusting the knob
     */
    step? : number
    /**
     * No animation when model changes
     */
    instantFeedback? : boolean
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Color name for the center part of the component from the Quasar Color Palette
     */
    centerColor? : string
    /**
     * Color name for the track of the component from the Quasar Color Palette
     */
    trackColor? : string
    /**
     * Size of text in CSS units, including unit name. Suggestion: use 'em' units to sync with component size
     */
    fontSize? : string
    /**
     * Thickness of progress arc as a ratio (0.0 < x < 1.0) of component size
     */
    thickness? : number
    /**
     * Angle to rotate progress arc by
     */
    angle? : number
    /**
     * Enables the default slot and uses it (if available), otherwise it displays the 'value' prop as text; Make sure the text has enough space to be displayed inside the component
     */
    showValue? : boolean
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Put component in readonly mode
     */
    readonly? : boolean
}

export interface QLayout extends ComponentPublicInstance {
    /**
     * Defines how your layout components (header/footer/drawer) should be placed on screen; See docs examples
     */
    view? : string
    /**
     * Containerize the layout which means it changes the default behavior of expanding to the whole window; Useful (but not limited to) for when using on a QDialog
     */
    container? : boolean
}

export interface QLinearProgress extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Progress value (0.0 < x < 1.0)
     */
    value? : number
    /**
     * Optional buffer value (0.0 < x < 1.0)
     */
    buffer? : number
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Color name for component's track from the Quasar Color Palette
     */
    trackColor? : string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Reverse direction of progress
     */
    reverse? : boolean
    /**
     * Draw stripes; For determinate state only (for performance reasons)
     */
    stripe? : boolean
    /**
     * Put component into indeterminate mode
     */
    indeterminate? : boolean
    /**
     * Put component into query mode
     */
    query? : boolean
    /**
     * Applies a small standard border-radius for a squared shape of the component
     */
    rounded? : boolean
    /**
     * No transition when model changes
     */
    instantFeedback? : boolean
}

export interface QMarkupTable extends ComponentPublicInstance {
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Applies a 'flat' design (no default shadow)
     */
    flat? : boolean
    /**
     * Applies a default border to the component
     */
    bordered? : boolean
    /**
     * Removes border-radius so borders are squared
     */
    square? : boolean
    /**
     * Use a separator/border between rows, columns or all cells
     */
    separator? : 'horizontal' | 'vertical' | 'cell' | 'none'
    /**
     * Wrap text within table cells
     */
    wrapCells? : boolean
}

export interface QMenu extends ComponentPublicInstance {
    /**
     * One of Quasar's embedded transitions
     */
    transitionShow? : string
    /**
     * One of Quasar's embedded transitions
     */
    transitionHide? : string
    /**
     * Transition duration (in milliseconds, without unit)
     */
    transitionDuration? : string | number
    /**
     * Configure a target element to trigger component toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) or a DOM element it attaches the events to the specified DOM element (if it exists)
     */
    target? : boolean | string | Element
    /**
     * Skips attaching events to the target DOM element (that trigger the element to get shown)
     */
    noParentEvent? : boolean
    /**
     * Allows the component to behave like a context menu, which opens with a right mouse click (or long tap on mobile)
     */
    contextMenu? : boolean
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive
     */
    modelValue? : boolean
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Allows the menu to match at least the full width of its target
     */
    fit? : boolean
    /**
     * Allows the menu to cover its target. When used, the 'self' and 'fit' props are no longer effective
     */
    cover? : boolean
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     */
    anchor? : 'top left' | 'top middle' | 'top right' | 'top start' | 'top end' | 'center left' | 'center middle' | 'center right' | 'center start' | 'center end' | 'bottom left' | 'bottom middle' | 'bottom right' | 'bottom start' | 'bottom end'
    /**
     * Two values setting the menu's own position relative to its target
     */
    self? : 'top left' | 'top middle' | 'top right' | 'top start' | 'top end' | 'center left' | 'center middle' | 'center right' | 'center start' | 'center end' | 'bottom left' | 'bottom middle' | 'bottom right' | 'bottom start' | 'bottom end'
    /**
     * An array of two numbers to offset the menu horizontally and vertically in pixels
     */
    offset? : any[]
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one
     */
    scrollTarget? : Element | string
    /**
     * Allows for the target position to be set by the mouse position, when the target of the menu is either clicked or touched
     */
    touchPosition? : boolean
    /**
     * Allows the menu to not be dismissed by a click/tap outside of the menu or by hitting the ESC key
     */
    persistent? : boolean
    /**
     * Changing route app won't dismiss the popup; No need to set it if 'persistent' prop is also set
     */
    noRouteDismiss? : boolean
    /**
     * Allows any click/tap in the menu to close it; Useful instead of attaching events to each menu item that should close the menu on click/tap
     */
    autoClose? : boolean
    /**
     * Separate from parent menu, marking it as a separate closing point for v-close-popup (without this, chained menus close all together)
     */
    separateClosePopup? : boolean
    /**
     * Forces content to have squared borders
     */
    square? : boolean
    /**
     * (Accessibility) When Menu gets hidden, do not refocus on the DOM element that previously had focus
     */
    noRefocus? : boolean
    /**
     * (Accessibility) When Menu gets shown, do not switch focus on it
     */
    noFocus? : boolean
    /**
     * The maximum height of the menu; Size in CSS units, including unit name
     */
    maxHeight? : string
    /**
     * The maximum width of the menu; Size in CSS units, including unit name
     */
    maxWidth? : string
    /**
     * Triggers component to show
     * @param evt JS event object
     */
    show (evt? : LooseDictionary): void
    /**
     * Triggers component to hide
     * @param evt JS event object
     */
    hide (evt? : LooseDictionary): void
    /**
     * Triggers component to toggle between show/hide
     * @param evt JS event object
     */
    toggle (evt? : LooseDictionary): void
    /**
     * There are some custom scenarios for which Quasar cannot automatically reposition the menu without significant performance drawbacks so the optimal solution is for you to call this method when you need it
     */
    updatePosition (): void
    /**
     * Focus menu; if you have content with autofocus attribute, it will directly focus it
     */
    focus (): void
}

export interface QNoSsr extends ComponentPublicInstance {
    /**
     * HTML tag to use
     */
    tag? : string
    /**
     * Text to display on server-side render (unless using 'placeholder' slot)
     */
    placeholder? : string
}

export interface QOptionGroup extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Model of the component; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive
     */
    modelValue : any
    /**
     * Array of objects with value and label props. The binary components will be created according to this array; Props from QToggle, QCheckbox or QRadio can also be added as key/value pairs to control the components singularly
     */
    options? : any[]
    /**
     * Used to specify the name of the controls; Useful if dealing with forms submitted directly to a URL
     */
    name? : string
    /**
     * The type of input component to be used
     */
    type? : 'radio' | 'checkbox' | 'toggle'
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Should the color (if specified any) be kept when input components are unticked?
     */
    keepColor? : boolean
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Label (if any specified) should be displayed on the left side of the input components
     */
    leftLabel? : boolean
    /**
     * Show input components as inline-block rather than each having their own row
     */
    inline? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
}

export interface QPageScroller extends ComponentPublicInstance {
    /**
     * Page side/corner to stick to
     */
    position? : 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left'
    /**
     * An array of two numbers to offset the component horizontally and vertically in pixels
     */
    offset? : any[]
    /**
     * By default the component shrinks to content's size; By using this prop you make the component fully expand horizontally or vertically, based on 'position' prop
     */
    expand? : boolean
    /**
     * Scroll offset (in pixels) from which point the component is shown on page; Measured from the top of the page (or from the bottom if in 'reverse' mode)
     */
    scrollOffset? : number
    /**
     * Work in reverse (shows when scrolling to the top of the page and scrolls to bottom when triggered)
     */
    reverse? : boolean
    /**
     * Duration (in milliseconds) of the scrolling until it reaches its target
     */
    duration? : number
}

export interface QPageSticky extends ComponentPublicInstance {
    /**
     * Page side/corner to stick to
     */
    position? : 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top' | 'right' | 'bottom' | 'left'
    /**
     * An array of two numbers to offset the component horizontally and vertically in pixels
     */
    offset? : any[]
    /**
     * By default the component shrinks to content's size; By using this prop you make the component fully expand horizontally or vertically, based on 'position' prop
     */
    expand? : boolean
}

export interface QPage extends ComponentPublicInstance {
    /**
     * Applies a default responsive page padding
     */
    padding? : boolean
    /**
     * Override default CSS style applied to the component (sets minHeight); Function(offset: Number) => CSS props/value: Object; For best performance, reference it from your scope and do not define it inline
     */
    styleFn? : Function
}

export interface QPageContainer extends ComponentPublicInstance {
}

export interface QPagination extends ComponentPublicInstance {
    /**
     * Current page (must be between min/max)
     */
    modelValue : number
    /**
     * Minimum page (must be lower than 'max')
     */
    min? : number
    /**
     * Number of last page (must be higher than 'min')
     */
    max : number
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     */
    textColor? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    activeColor? : string
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     */
    activeTextColor? : string
    /**
     * Notify the component that the background is a dark color (useful when you are using it along with the 'input' prop)
     */
    dark? : boolean
    /**
     * Style definitions to be attributed to the input (if using one)
     */
    inputStyle? : any[] | string | LooseDictionary
    /**
     * Class definitions to be attributed to the input (if using one)
     */
    inputClass? : any[] | string | LooseDictionary
    /**
     * Button size in CSS units, including unit name
     */
    size? : string
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Use an input instead of buttons
     */
    input? : boolean
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    iconPrev? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    iconNext? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    iconFirst? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    iconLast? : string
    /**
     * Generate link for page buttons; For best performance, reference it from your scope and do not define it inline
     */
    toFn? : Function
    /**
     * Show boundary button links
     */
    boundaryLinks? : boolean
    /**
     * Always show first and last page buttons (if not using 'input')
     */
    boundaryNumbers? : boolean
    /**
     * Show direction buttons
     */
    directionLinks? : boolean
    /**
     * Show ellipses (...) when pages are available
     */
    ellipses? : boolean
    /**
     * Maximum number of page links to display at a time; 0 means Infinite
     */
    maxPages? : number
    /**
     * Configure buttons material ripple (disable it by setting it to 'false' or supply a config object); Does not applies to boundary and ellipsis buttons
     */
    ripple? : boolean | LooseDictionary
    /**
     * Makes a circle shaped button for all buttons
     */
    round? : boolean
    /**
     * Applies a more prominent border-radius for a squared shape button for all buttons
     */
    rounded? : boolean
    /**
     * Use 'flat' design for current page button
     */
    flat? : boolean
    /**
     * Use 'outline' design for current page button
     */
    outline? : boolean
    /**
     * Remove shadow for current page button
     */
    unelevated? : boolean
    /**
     * Use 'push' design for current page button
     */
    push? : boolean
    /**
     * Applies a glossy effect for all buttons
     */
    glossy? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Apply custom padding (vertical [horizontal]); Size in CSS units, including unit name or standard size name (none|xs|sm|md|lg|xl); Also removes the min width and height when set
     */
    padding? : string
    /**
     * Go directly to the specified page
     * @param pageNumber Page number to go to
     */
    set (pageNumber? : number): void
    /**
     * Increment/Decrement current page by offset
     * @param offset Offset page, can be negative or positive
     */
    setByOffset (offset? : number): void
}

export interface QParallax extends ComponentPublicInstance {
    /**
     * Path to image (unless a 'media' slot is used)
     */
    src? : string
    /**
     * Height of component (in pixels)
     */
    height? : number
    /**
     * Speed of parallax effect (0.0 < x < 1.0)
     */
    speed? : number
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one
     */
    scrollTarget? : Element | string
}

export interface QPopupEdit extends ComponentPublicInstance {
    /**
     * Model of the component; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive
     */
    modelValue : any
    /**
     * Optional title (unless 'title' slot is used)
     */
    title? : string
    /**
     * Show Set and Cancel buttons
     */
    buttons? : boolean
    /**
     * Override Set button label
     */
    labelSet? : string
    /**
     * Override Cancel button label
     */
    labelCancel? : string
    /**
     * Automatically save the model (if changed) when user clicks/taps outside of the popup; It does not apply to ESC key
     */
    autoSave? : boolean
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Validates model then triggers 'save' and closes Popup; Returns a Boolean ('true' means valid, 'false' means abort); Syntax: validate(value); For best performance, reference it from your scope and do not define it inline
     */
    validate? : Function
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Allows the menu to match at least the full width of its target
     */
    fit? : boolean
    /**
     * Allows the menu to cover its target. When used, the 'self' and 'fit' props are no longer effective
     */
    cover? : boolean
    /**
     * Two values setting the starting position or anchor point of the menu relative to its target
     */
    anchor? : 'top left' | 'top middle' | 'top right' | 'top start' | 'top end' | 'center left' | 'center middle' | 'center right' | 'center start' | 'center end' | 'bottom left' | 'bottom middle' | 'bottom right' | 'bottom start' | 'bottom end'
    /**
     * Two values setting the menu's own position relative to its target
     */
    self? : 'top left' | 'top middle' | 'top right' | 'top start' | 'top end' | 'center left' | 'center middle' | 'center right' | 'center start' | 'center end' | 'bottom left' | 'bottom middle' | 'bottom right' | 'bottom start' | 'bottom end'
    /**
     * An array of two numbers to offset the menu horizontally and vertically in pixels
     */
    offset? : any[]
    /**
     * Allows for the target position to be set by the mouse position, when the target of the menu is either clicked or touched
     */
    touchPosition? : boolean
    /**
     * Avoid menu closing by hitting ESC key or by clicking/tapping outside of the Popup
     */
    persistent? : boolean
    /**
     * Separate from parent menu, marking it as a separate closing point for v-close-popup (without this, chained menus close all together)
     */
    separateClosePopup? : boolean
    /**
     * Forces menu to have squared borders
     */
    square? : boolean
    /**
     * The maximum height of the menu; Size in CSS units, including unit name
     */
    maxHeight? : string
    /**
     * The maximum width of the menu; Size in CSS units, including unit name
     */
    maxWidth? : string
    /**
     * Trigger a model update; Validates model (and emits 'save' event if it's the case) then closes Popup
     */
    set (): void
    /**
     * Triggers a model reset to its initial value ('cancel' event is emitted) then closes Popup
     */
    cancel (): void
    /**
     * Triggers component to show
     * @param evt JS event object
     */
    show (evt? : LooseDictionary): void
    /**
     * Triggers component to hide
     * @param evt JS event object
     */
    hide (evt? : LooseDictionary): void
    /**
     * There are some custom scenarios for which Quasar cannot automatically reposition the component without significant performance drawbacks so the optimal solution is for you to call this method when you need it
     */
    updatePosition (): void
}

export interface QPopupProxy extends ComponentPublicInstance {
    /**
     * Configure a target element to trigger component toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) or a DOM element it attaches the events to the specified DOM element (if it exists)
     */
    target? : boolean | string | Element
    /**
     * Skips attaching events to the target DOM element (that trigger the element to get shown)
     */
    noParentEvent? : boolean
    /**
     * Allows the component to behave like a context menu, which opens with a right mouse click (or long tap on mobile)
     */
    contextMenu? : boolean
    /**
     * Defines the state of the component (shown/hidden); Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     */
    modelValue? : boolean
    /**
     * Breakpoint (in pixels) of window width/height (whichever is smaller) from where a Menu will get to be used instead of a Dialog
     */
    breakpoint? : number | string
    /**
     * Triggers component to show
     * @param evt JS event object
     */
    show (evt? : LooseDictionary): void
    /**
     * Triggers component to hide
     * @param evt JS event object
     */
    hide (evt? : LooseDictionary): void
    /**
     * Triggers component to toggle between show/hide
     * @param evt JS event object
     */
    toggle (evt? : LooseDictionary): void
}

export interface QPullToRefresh extends ComponentPublicInstance {
    /**
     * Color name for the icon from the Quasar Color Palette
     */
    color? : string
    /**
     * Color name for background of the icon container from the Quasar Color Palette
     */
    bgColor? : string
    /**
     * Icon to display when refreshing the content
     */
    icon? : string
    /**
     * Don't listen for mouse events
     */
    noMouse? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one
     */
    scrollTarget? : Element | string
    /**
     * Triggers a refresh
     */
    trigger (): void
    /**
     * Updates the scroll target; Useful when the parent elements change so that the scrolling target also changes
     */
    updateScrollTarget (): void
}

export interface QRadio extends ComponentPublicInstance {
    /**
     * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
     */
    name? : string
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Model of the component; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive
     */
    modelValue : number | string
    /**
     * The actual value of the option with which model value is changed
     */
    val : number | string
    /**
     * Label to display along the radio control (or use the default slot instead of this prop)
     */
    label? : string
    /**
     * Label (if any specified) should be displayed on the left side of the checkbox
     */
    leftLabel? : boolean
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Should the color (if specified any) be kept when checkbox is unticked?
     */
    keepColor? : boolean
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
    /**
     * Sets the Radio's v-model to equal the val
     */
    set (): void
}

export interface QRange extends ComponentPublicInstance {
    /**
     * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
     */
    name? : string
    /**
     * Model of the component of type { min, max } (both values must be between global min/max); Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     */
    modelValue : {
            /**
             * Model value for left thumb
             */
            min? : number
            /**
             * Model value for right thumb
             */
            max? : number }
    /**
     * Minimum value of the model
     */
    min? : number
    /**
     * Maximum value of the model
     */
    max? : number
    /**
     * Specify step amount between valid values (> 0.0); When step equals to 0 it defines infinite granularity
     */
    step? : number
    /**
     * Work in reverse (changes direction)
     */
    reverse? : boolean
    /**
     * Display in vertical direction
     */
    vertical? : boolean
    /**
     * User can drag range instead of just the two thumbs
     */
    dragRange? : boolean
    /**
     * User can drag only the range instead and NOT the two thumbs
     */
    dragOnlyRange? : boolean
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Popup labels (for left and right thumbs) when user clicks/taps on the slider thumb and moves it
     */
    label? : boolean
    /**
     * Color name for labels background from the Quasar Color Palette; Applies to both labels, unless specific label color props are used
     */
    labelColor? : string
    /**
     * Color name for labels text from the Quasar Color Palette; Applies to both labels, unless specific label text color props are used
     */
    labelTextColor? : string
    /**
     * Color name for left label background from the Quasar Color Palette
     */
    leftLabelColor? : string
    /**
     * Color name for left label text from the Quasar Color Palette
     */
    leftLabelTextColor? : string
    /**
     * Color name for right label background from the Quasar Color Palette
     */
    rightLabelColor? : string
    /**
     * Color name for right label text from the Quasar Color Palette
     */
    rightLabelTextColor? : string
    /**
     * Override default label for min value
     */
    leftLabelValue? : string | number
    /**
     * Override default label for max value
     */
    rightLabelValue? : string | number
    /**
     * Always display the labels
     */
    labelAlways? : boolean
    /**
     * Display markers on the track, one for each possible value for the model
     */
    markers? : boolean
    /**
     * Snap thumbs on valid values, rather than sliding freely; Suggestion: use with 'step' prop
     */
    snap? : boolean
    /**
     * Set custom thumbs svg path
     */
    thumbPath? : string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Put component in readonly mode
     */
    readonly? : boolean
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
}

export interface QRating extends ComponentPublicInstance {
    /**
     * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
     */
    name? : string
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Model of the component; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive
     */
    modelValue : number
    /**
     * Number of icons to display
     */
    max? : number | string
    /**
     * Icon name following Quasar convention; make sure you have the icon library installed unless you are using 'img:' prefix; If an array is provided each rating value will use the corresponding icon in the array (0 based)
     */
    icon? : string | any[]
    /**
     * Icon name following Quasar convention to be used when selected (optional); make sure you have the icon library installed unless you are using 'img:' prefix; If an array is provided each rating value will use the corresponding icon in the array (0 based)
     */
    iconSelected? : string | any[]
    /**
     * Icon name following Quasar convention to be used when selected (optional); make sure you have the icon library installed unless you are using 'img:' prefix; If an array is provided each rating value will use the corresponding icon in the array (0 based)
     */
    iconHalf? : string | any[]
    /**
     * Color name for component from the Quasar Color Palette; v1.5.0+: If an array is provided each rating value will use the corresponding color in the array (0 based)
     */
    color? : string | any[]
    /**
     * Color name from the Quasar Palette for selected icons
     */
    colorSelected? : string | any[]
    /**
     * Color name from the Quasar Palette for half selected icons
     */
    colorHalf? : string | any[]
    /**
     * Does not lower opacity for unselected icons
     */
    noDimming? : boolean
    /**
     * When used, disables default behavior of clicking/tapping on icon which represents current model value to reset model to 0
     */
    noReset? : boolean
    /**
     * Put component in readonly mode
     */
    readonly? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
}

export interface QResizeObserver extends ComponentPublicInstance {
    /**
     * Debounce amount (in milliseconds)
     */
    debounce? : string | number
    /**
     * Emit a 'resize' event
     * @param immediately Skip over the debounce amount
     */
    trigger (immediately? : boolean): void
}

export interface QResponsive extends ComponentPublicInstance {
    /**
     * Aspect ratio for the content; If value is a String, then avoid using a computational statement (like '16/9') and instead specify the String value of the result directly (eg. '1.7777')
     */
    ratio? : string | number
}

export interface QScrollArea extends ComponentPublicInstance {
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Object with CSS properties and values for custom styling the scrollbars (both vertical and horizontal)
     */
    barStyle? : any[] | string | LooseDictionary
    /**
     * Object with CSS properties and values for custom styling the vertical scrollbar; Is applied on top of 'bar-style' prop
     */
    verticalBarStyle? : any[] | string | LooseDictionary
    /**
     * Object with CSS properties and values for custom styling the horizontal scrollbar; Is applied on top of 'bar-style' prop
     */
    horizontalBarStyle? : any[] | string | LooseDictionary
    /**
     * Object with CSS properties and values for custom styling the thumb of scrollbars (both vertical and horizontal)
     */
    thumbStyle? : LooseDictionary
    /**
     * Object with CSS properties and values for custom styling the thumb of the vertical scrollbar; Is applied on top of 'thumb-style' prop
     */
    verticalThumbStyle? : LooseDictionary
    /**
     * Object with CSS properties and values for custom styling the thumb of the horizontal scrollbar; Is applied on top of 'thumb-style' prop
     */
    horizontalThumbStyle? : LooseDictionary
    /**
     * Object with CSS properties and values for styling the container of QScrollArea
     */
    contentStyle? : any[] | string | LooseDictionary
    /**
     * Object with CSS properties and values for styling the container of QScrollArea when scroll area becomes active (is mouse hovered)
     */
    contentActiveStyle? : any[] | string | LooseDictionary
    /**
     * Manually control the visibility of the scrollbar; Overrides default mouse over/leave behavior
     */
    visible? : boolean
    /**
     * When content changes, the scrollbar appears; this delay defines the amount of time (in milliseconds) before scrollbars disappear again (if component is not hovered)
     */
    delay? : number | string
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
    /**
     * Get the scrolling DOM element target
     * @returns DOM element upon which scrolling takes place
     */
    getScrollTarget (): LooseDictionary
    /**
     * Get the current scroll information
     * @returns Scroll information
     */
    getScroll (): {
            /**
             * Vertical scroll position (in px)
             */
            verticalPosition? : number
            /**
             * Vertical scroll percentage (0.0 <= x <= 1.0)
             */
            verticalPercentage? : number
            /**
             * Vertical scroll size (in px)
             */
            verticalSize? : number
            /**
             * Height of the container (in px)
             */
            verticalContainerSize? : number
            /**
             * Horizontal scroll position (in px)
             */
            horizontalPosition? : number
            /**
             * Horizontal scroll percentage (0.0 <= x <= 1.0)
             */
            horizontalPercentage? : number
            /**
             * Horizontal scroll size (in px)
             */
            horizontalSize? : number
            /**
             * Width of the container (in px)
             */
            horizontalContainerSize? : number }
    /**
     * Get current scroll position
     * @returns undefined
     */
    getScrollPosition (): {
            /**
             * Scroll offset from top (vertical)
             */
            top? : number
            /**
             * Scroll offset from left (horizontal)
             */
            left? : number }
    /**
     * Get current scroll position in percentage (0.0 <= x <= 1.0)
     * @returns undefined
     */
    getScrollPercentage (): {
            /**
             * Scroll percentage (0.0 <= x <= 1.0) offset from top (vertical)
             */
            top? : number
            /**
             * Scroll percentage (0.0 <= x <= 1.0) offset from left (horizontal)
             */
            left? : number }
    /**
     * Set scroll position to an offset; If a duration (in milliseconds) is specified then the scroll is animated
     * @param axis Scroll axis
     * @param offset Scroll position offset from top (in pixels)
     * @param duration Duration (in milliseconds) enabling animated scroll
     */
    setScrollPosition (axis : 'vertical' | 'horizontal', offset : number, duration? : number): void
    /**
     * Set scroll position to a percentage (0.0 <= x <= 1.0) of the total scrolling size; If a duration (in milliseconds) is specified then the scroll is animated
     * @param axis Scroll axis
     * @param offset Scroll percentage (0.0 <= x <= 1.0) of the total scrolling size
     * @param duration Duration (in milliseconds) enabling animated scroll
     */
    setScrollPercentage (axis : 'vertical' | 'horizontal', offset : number, duration? : number): void
}

export interface QScrollObserver extends ComponentPublicInstance {
    /**
     * Debounce amount (in milliseconds)
     */
    debounce? : string | number
    /**
     * Axis on which to detect changes
     */
    axis? : 'both' | 'vertical' | 'horizontal'
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one
     */
    scrollTarget? : Element | string
    /**
     * Emit a 'scroll' event
     * @param immediately Skip over the debounce amount
     */
    trigger (immediately? : boolean): void
    /**
     * Get current scroll details under the form of an Object: { position, direction, directionChanged, inflectionPoint }
     */
    getPosition (): void
}

export interface QSelect extends ComponentPublicInstance {
    /**
     * Used to specify the name of the control; Useful if dealing with forms; If not specified, it takes the value of 'for' prop, if it exists
     */
    name? : string
    /**
     * Make virtual list work in horizontal mode
     */
    virtualScrollHorizontal? : boolean
    /**
     * Minimum number of items to render in the virtual list
     */
    virtualScrollSliceSize? : number | string
    /**
     * Ratio of number of items in visible zone to render before it
     */
    virtualScrollSliceRatioBefore? : number | string
    /**
     * Ratio of number of items in visible zone to render after it
     */
    virtualScrollSliceRatioAfter? : number | string
    /**
     * Default size in pixels (height if vertical, width if horizontal) of an item; This value is used for rendering the initial list; Try to use a value close to the minimum size of an item
     */
    virtualScrollItemSize? : number | string
    /**
     * Size in pixels (height if vertical, width if horizontal) of the sticky part (if using one) at the start of the list; A correct value will improve scroll precision
     */
    virtualScrollStickySizeStart? : number | string
    /**
     * Size in pixels (height if vertical, width if horizontal) of the sticky part (if using one) at the end of the list; A correct value will improve scroll precision
     */
    virtualScrollStickySizeEnd? : number | string
    /**
     * The number of columns in the table (you need this if you use table-layout: fixed)
     */
    tableColspan? : number | string
    /**
     * Model of the component; Must be Array if using 'multiple' prop; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     */
    modelValue : number | string | any[]
    /**
     * Does field have validation errors?
     */
    error? : boolean
    /**
     * Validation error message (gets displayed only if 'error' is set to 'true')
     */
    errorMessage? : string
    /**
     * Hide error icon when there is an error
     */
    noErrorIcon? : boolean
    /**
     * Array of Functions/Strings; If String, then it must be a name of one of the embedded validation rules
     */
    rules? : any[]
    /**
     * By default a change in the rules does not trigger a new validation until the model changes; If set to true then a change in the rules will trigger a validation; Has a performance penalty, so use it only when you really need it
     */
    reactiveRules? : boolean
    /**
     * If set to boolean true then it checks validation status against the 'rules' only after field loses focus for first time; If set to 'ondemand' then it will trigger only when component's validate() method is manually called or when the wrapper QForm submits itself
     */
    lazyRules? : boolean | 'ondemand'
    /**
     * A text label that will “float” up above the input field, once the field gets focus
     */
    label? : string
    /**
     * Label will be always shown above the field regardless of field content (if any)
     */
    stackLabel? : boolean
    /**
     * Helper (hint) text which gets placed below your wrapped form component
     */
    hint? : string
    /**
     * Hide the helper (hint) text when field doesn't have focus
     */
    hideHint? : boolean
    /**
     * Prefix
     */
    prefix? : string
    /**
     * Suffix
     */
    suffix? : string
    /**
     * Color name for the label from the Quasar Color Palette; Overrides the 'color' prop; The difference from 'color' prop is that the label will always have this color, even when field is not focused
     */
    labelColor? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    bgColor? : string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Signals the user a process is in progress by displaying a spinner; Spinner can be customized by using the 'loading' slot.
     */
    loading? : boolean
    /**
     * Appends clearable icon when a value (not undefined or null) is set; When clicked, model becomes null
     */
    clearable? : boolean
    /**
     * Custom icon to use for the clear button when using along with 'clearable' prop
     */
    clearIcon? : string
    /**
     * Use 'filled' design for the field
     */
    filled? : boolean
    /**
     * Use 'outlined' design for the field
     */
    outlined? : boolean
    /**
     * Use 'borderless' design for the field
     */
    borderless? : boolean
    /**
     * Use 'standout' design for the field; Specifies classes to be applied when focused (overriding default ones)
     */
    standout? : boolean | string
    /**
     * Enables label slot; You need to set it to force use of the 'label' slot if the 'label' prop is not set
     */
    labelSlot? : boolean
    /**
     * Enables bottom slots ('error', 'hint', 'counter')
     */
    bottomSlots? : boolean
    /**
     * Do not reserve space for hint/error/counter anymore when these are not used; As a result, it also disables the animation for those; It also allows the hint/error area to stretch vertically based on its content
     */
    hideBottomSpace? : boolean
    /**
     * Show an automatic counter on bottom right
     */
    counter? : boolean
    /**
     * Applies a small standard border-radius for a squared shape of the component
     */
    rounded? : boolean
    /**
     * Remove border-radius so borders are squared; Overrides 'rounded' prop
     */
    square? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Match inner content alignment to that of QItem
     */
    itemAligned? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Put component in readonly mode
     */
    readonly? : boolean
    /**
     * Focus field on initial component render
     */
    autofocus? : boolean
    /**
     * Used to specify the 'id' of the control and also the 'for' attribute of the label that wraps it; If no 'name' prop is specified, then it is used for this attribute as well
     */
    for? : string
    /**
     * Allow multiple selection; Model must be Array
     */
    multiple? : boolean
    /**
     * Override default selection string, if not using 'selected' slot/scoped slot and if not using 'use-chips' prop
     */
    displayValue? : number | string
    /**
     * Force render the selected option(s) as HTML; This can lead to XSS attacks so make sure that you sanitize the content; Does NOT apply when using 'selected' or 'selected-item' slots!
     */
    displayValueHtml? : boolean
    /**
     * Available options that the user can select from. For best performance freeze the list of options.
     */
    options? : any[]
    /**
     * Property of option which holds the 'value'; If using a function then for best performance, reference it from your scope and do not define it inline
     */
    optionValue? : Function | string
    /**
     * Property of option which holds the 'label'; If using a function then for best performance, reference it from your scope and do not define it inline
     */
    optionLabel? : Function | string
    /**
     * Property of option which tells it's disabled; The value of the property must be a Boolean; If using a function then for best performance, reference it from your scope and do not define it inline
     */
    optionDisable? : Function | string
    /**
     * Hides selection; Use the underlying input tag to hold the label (instead of showing it to the right of the input) of the selected option; Only works for non 'multiple' Selects
     */
    hideSelected? : boolean
    /**
     * Hides dropdown icon
     */
    hideDropdownIcon? : boolean
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    dropdownIcon? : string
    /**
     * Allow a maximum number of selections that the user can do
     */
    maxValues? : number | string
    /**
     * Dense mode for options list; occupies less space
     */
    optionsDense? : boolean
    /**
     * Options menu will be colored with a dark color
     */
    optionsDark? : boolean
    /**
     * CSS class name for options that are active/selected; Set it to an empty string to stop applying the default (which is text-* where * is the 'color' prop value)
     */
    optionsSelectedClass? : string
    /**
     * Force render the options as HTML; This can lead to XSS attacks so make sure that you sanitize the content; Does NOT apply when using 'option' slot!
     */
    optionsHtml? : boolean
    /**
     * Expanded menu will cover the component (will not work along with 'use-input' prop for obvious reasons)
     */
    optionsCover? : boolean
    /**
     * Allow the options list to be narrower than the field (only in menu mode)
     */
    menuShrink? : boolean
    /**
     * Two values setting the starting position or anchor point of the options list relative to the field (only in menu mode)
     */
    menuAnchor? : 'top left' | 'top middle' | 'top right' | 'top start' | 'top end' | 'center left' | 'center middle' | 'center right' | 'center start' | 'center end' | 'bottom left' | 'bottom middle' | 'bottom right' | 'bottom start' | 'bottom end'
    /**
     * Two values setting the options list's own position relative to its target (only in menu mode)
     */
    menuSelf? : 'top left' | 'top middle' | 'top right' | 'top start' | 'top end' | 'center left' | 'center middle' | 'center right' | 'center start' | 'center end' | 'bottom left' | 'bottom middle' | 'bottom right' | 'bottom start' | 'bottom end'
    /**
     * An array of two numbers to offset the options list horizontally and vertically in pixels (only in menu mode)
     */
    menuOffset? : any[]
    /**
     * Class definitions to be attributed to the popup content
     */
    popupContentClass? : string
    /**
     * Style definitions to be attributed to the popup content
     */
    popupContentStyle? : any[] | string | LooseDictionary
    /**
     * Use an input tag where users can type
     */
    useInput? : boolean
    /**
     * Use QChip to show what is currently selected
     */
    useChips? : boolean
    /**
     * Fills the input with current value; Useful along with 'hide-selected'; Does NOT works along with 'multiple' selection
     */
    fillInput? : boolean
    /**
     * Enables creation of new values and defines behavior when a new value is added: 'add' means it adds the value (even if possible duplicate), 'add-unique' adds only unique values, and 'toggle' adds or removes the value (based on if it exists or not already); When using this prop then listening for @new-value becomes optional (only to override the behavior defined by 'new-value-mode')
     */
    newValueMode? : 'add' | 'add-unique' | 'toggle'
    /**
     * Try to map labels of model from 'options' Array; has a small performance penalty; If you are using emit-value you will probably need to use map-options to display the label text in the select field rather than the value;  Refer to the 'Affecting model' section above
     */
    mapOptions? : boolean
    /**
     * Update model with the value of the selected option instead of the whole option
     */
    emitValue? : boolean
    /**
     * Debounce the input model update with an amount of milliseconds
     */
    inputDebounce? : number | string
    /**
     * Class definitions to be attributed to the underlying input tag
     */
    inputClass? : any[] | string | LooseDictionary
    /**
     * Style definitions to be attributed to the underlying input tag
     */
    inputStyle? : any[] | string | LooseDictionary
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
    /**
     * Autocomplete attribute for field
     */
    autocomplete? : string
    /**
     * Transition when showing the menu/dialog; One of Quasar's embedded transitions
     */
    transitionShow? : string
    /**
     * Transition when hiding the menu/dialog; One of Quasar's embedded transitions
     */
    transitionHide? : string
    /**
     * Transition duration when hiding the menu/dialog (in milliseconds, without unit)
     */
    transitionDuration? : string | number
    /**
     * Overrides the default dynamic mode of showing as menu on desktop and dialog on mobiles
     */
    behavior? : 'default' | 'menu' | 'dialog'
    /**
     * Scroll the virtual scroll list to the item with the specified index (0 based)
     * @param index The index of the list item (0 based)
     * @param edge The edge to align to if the item is not visible already (by default it aligns to end if scrolling towards the end and to start otherwise); If the '-force' version is used then it always aligns
     */
    scrollTo (index : string | number, edge? : 'start' | 'center' | 'end' | 'start-force' | 'center-force' | 'end-force'): void
    /**
     * Resets the virtual scroll computations; Needed for custom edge-cases
     */
    reset (): void
    /**
     * Refreshes the virtual scroll list; Use it after appending items
     * @param index The index of the list item to scroll to after refresh (0 based); If it's not specified the scroll position is not changed; Use a negative value to keep scroll position
     */
    refresh (index? : string | number): void
    /**
     * Reset validation status
     */
    resetValidation (): void
    /**
     * Trigger a validation
     * @param value Optional value to validate against
     * @returns True/false if no async rules, otherwise a Promise with the outcome (true -> validation was a success, false -> invalid models detected)
     */
    validate (value? : any): boolean | Promise<boolean>
    /**
     * Focus component
     */
    focus (): void
    /**
     * Blur component (lose focus)
     */
    blur (): void
    /**
     * Focus and open popup
     */
    showPopup (): void
    /**
     * Hide popup
     */
    hidePopup (): void
    /**
     * Remove selected option located at specific index
     * @param index Index at which to remove selection
     */
    removeAtIndex (index : number): void
    /**
     * Adds option to model
     * @param opt Option to add to model
     * @param unique Option must be unique
     */
    add (opt : any, unique? : boolean): void
    /**
     * Add/remove option from model
     * @param opt Option to add to model
     * @param keepOpen Don't close the menu and do not clear the filter
     */
    toggleOption (opt : any, keepOpen? : boolean): void
    /**
     * Sets option from menu as 'focused'
     * @param index Index of option from menu
     */
    setOptionIndex (index : number): void
    /**
     * Move selected option from menu by index offset
     * @param offset Number of options to move up or down
     * @param skipInputValue Don't set input-value on navigation
     */
    moveOptionSelection (offset? : number, skipInputValue? : boolean): void
    /**
     * Filter options
     * @param value String to filter with
     */
    filter (value : string): void
    /**
     * Recomputes menu position
     */
    updateMenuPosition (): void
    /**
     * If 'use-input' is specified, this updates the value that it holds
     * @param value String to set the input value to
     * @param noFilter Set to true if you don't want the filter (if any) to be also triggered
     */
    updateInputValue (value? : string, noFilter? : boolean): void
    /**
     * Tells if an option is selected
     * @param opt Option entry
     * @returns Option is selected or not
     */
    isOptionSelected (opt : any): boolean
    /**
     * Get the model value that would be emitted by QSelect when selecting a said option; Also takes into consideration if 'emit-value' is set
     * @param opt Option entry
     * @returns Emitting model value of said option
     */
    getEmittingOptionValue (opt : any): any
    /**
     * Get the model value of an option; Takes into consideration 'option-value' (if used), but does not looks for 'emit-value', like getEmittingOptionValue() does
     * @param opt Option entry
     * @returns Model value of said option
     */
    getOptionValue (opt : any): any
    /**
     * Get the label of an option; Takes into consideration the 'option-label' prop (if used)
     * @param opt Option entry
     * @returns Label of said option
     */
    getOptionLabel (opt : any): any
    /**
     * Tells if an option is disabled; Takes into consideration 'option-disable' prop (if used)
     * @param opt Option entry
     * @returns Option is disabled or not
     */
    isOptionDisabled (opt : any): boolean
}

export interface QSeparator extends ComponentPublicInstance {
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * If set to true, the corresponding direction margins will be set to 8px; It can also be set to a size in CSS units, including unit name, or one of the xs|sm|md|lg|xl predefined sizes
     */
    spaced? : boolean | string
    /**
     * if set to true, the left and right margins will be set to 16px. If set to item, the left and right margins will be set to 72px. If set to item-thumbnail, the left margin is set to 116px and right margin is set to 0px
     */
    inset? : boolean | string
    /**
     * If set to true, the separator will be vertical.
     */
    vertical? : boolean
    /**
     * Size in CSS units, including unit name
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSkeleton extends ComponentPublicInstance {
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Type of skeleton placeholder
     */
    type? : 'text' | 'rect' | 'circle' | 'QBtn' | 'QBadge' | 'QChip' | 'QToolbar' | 'QCheckbox' | 'QRadio' | 'QToggle' | 'QSlider' | 'QRange' | 'QInput' | 'QAvatar'
    /**
     * The animation effect of the skeleton placeholder
     */
    animation? : 'wave' | 'pulse' | 'pulse-x' | 'pulse-y' | 'fade' | 'blink' | 'none'
    /**
     * Removes border-radius so borders are squared
     */
    square? : boolean
    /**
     * Applies a default border to the component
     */
    bordered? : boolean
    /**
     * Size in CSS units, including unit name; Overrides 'height' and 'width' props and applies the value to both height and width
     */
    size? : string
    /**
     * Width in CSS units, including unit name; Apply custom width; Use this prop or through CSS; Overridden by 'size' prop if used
     */
    width? : string
    /**
     * Height in CSS units, including unit name; Apply custom height; Use this prop or through CSS; Overridden by 'size' prop if used
     */
    height? : string
    /**
     * HTML tag to use
     */
    tag? : string
}

export interface QSlideItem extends ComponentPublicInstance {
    /**
     * Color name for left-side background from the Quasar Color Palette
     */
    leftColor? : string
    /**
     * Color name for right-side background from the Quasar Color Palette
     */
    rightColor? : string
    /**
     * Color name for top-side background from the Quasar Color Palette
     */
    topColor? : string
    /**
     * Color name for bottom-side background from the Quasar Color Palette
     */
    bottomColor? : string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Reset to initial state (not swiped to any side)
     */
    reset (): void
}

export interface QSlideTransition extends ComponentPublicInstance {
    /**
     * If set to true, the transition will be applied on the initial render.
     */
    appear? : boolean
    /**
     * Duration (in milliseconds) enabling animated scroll.
     */
    duration? : number
}

export interface QSlider extends ComponentPublicInstance {
    /**
     * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
     */
    name? : string
    /**
     * Model of the component (must be between min/max); Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     */
    modelValue : number
    /**
     * Minimum value of the model
     */
    min? : number
    /**
     * Maximum value of the model
     */
    max? : number
    /**
     * Specify step amount between valid values (> 0.0); When step equals to 0 it defines infinite granularity
     */
    step? : number
    /**
     * Work in reverse (changes direction)
     */
    reverse? : boolean
    /**
     * Display in vertical direction
     */
    vertical? : boolean
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Popup a label when user clicks/taps on the slider thumb and moves it
     */
    label? : boolean
    /**
     * Color name for component from the Quasar Color Palette
     */
    labelColor? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    labelTextColor? : string
    /**
     * Override default label value
     */
    labelValue? : string | number
    /**
     * Always display the label
     */
    labelAlways? : boolean
    /**
     * Display markers on the track, one for each possible value for the model
     */
    markers? : boolean
    /**
     * Snap on valid values, rather than sliding freely; Suggestion: use with 'step' prop
     */
    snap? : boolean
    /**
     * Set custom thumb svg path
     */
    thumbPath? : string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Put component in readonly mode
     */
    readonly? : boolean
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
}

export interface QSpace extends ComponentPublicInstance {
}

export interface QSpinner extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Override value to use for stroke-width
     */
    thickness? : number
}

export interface QSpinnerAudio extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerBall extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerBars extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerBox extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerClock extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerComment extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerCube extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerDots extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerFacebook extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerGears extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerGrid extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerHearts extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerHourglass extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerInfinity extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerIos extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerOrbit extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerOval extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerPie extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerPuff extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerRadio extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerRings extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSpinnerTail extends ComponentPublicInstance {
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
}

export interface QSplitter extends ComponentPublicInstance {
    /**
     * Model of the component defining the size of first panel (or second if using reverse) in the unit specified (for '%' it's the split ratio percent - 0.0 < x < 100.0; for 'px' it's the size in px); Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     */
    modelValue : number
    /**
     * Apply the model size to the second panel (by default it applies to the first)
     */
    reverse? : boolean
    /**
     * CSS unit for the model
     */
    unit? : '%' | 'px'
    /**
     * Emit model while user is panning on the separator
     */
    emitImmediately? : boolean
    /**
     * Allows the splitter to split its two panels horizontally, instead of vertically
     */
    horizontal? : boolean
    /**
     * An array of two values representing the minimum and maximum split size of the two panels; When 'px' unit is set then you can use Infinity as the second value to make it unbound on the other side
     */
    limits? : any[]
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Class definitions to be attributed to the 'before' panel
     */
    beforeClass? : any[] | string | LooseDictionary
    /**
     * Class definitions to be attributed to the 'after' panel
     */
    afterClass? : any[] | string | LooseDictionary
    /**
     * Class definitions to be attributed to the splitter separator
     */
    separatorClass? : any[] | string | LooseDictionary
    /**
     * Style definitions to be attributed to the splitter separator
     */
    separatorStyle? : any[] | string | LooseDictionary
    /**
     * Applies a default lighter color on the separator; To be used when background is darker; Avoid using when you are overriding through separator-class or separator-style props
     */
    dark? : boolean
}

export interface QStep extends ComponentPublicInstance {
    /**
     * Panel name
     */
    name : any
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    icon? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Step title
     */
    title : string
    /**
     * Step’s additional information that appears beneath the title
     */
    caption? : string
    /**
     * Step's prefix (max 2 characters) which replaces the icon if step does not has error, is being edited or is marked as done
     */
    prefix? : string | number
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    doneIcon? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    doneColor? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    activeIcon? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    activeColor? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    errorIcon? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    errorColor? : string
    /**
     * Allow navigation through the header
     */
    headerNav? : boolean
    /**
     * Mark the step as 'done'
     */
    done? : boolean
    /**
     * Mark the step as having an error
     */
    error? : boolean
}

export interface QStepper extends ComponentPublicInstance {
    /**
     * Model of the component defining the current panel's name; If a Number is used, it does not define the panel's index, but rather the panel's name which can also be an Integer; Either use this property (along with a listener for 'update:model-value' event) OR use the v-model directive.
     */
    modelValue? : any
    /**
     * Equivalent to using Vue's native <keep-alive> component on the content
     */
    keepAlive? : boolean
    /**
     * Equivalent to using Vue's native include prop for <keep-alive>; Values must be valid Vue component names
     */
    keepAliveInclude? : string | any[] | RegExp
    /**
     * Equivalent to using Vue's native exclude prop for <keep-alive>; Values must be valid Vue component names
     */
    keepAliveExclude? : string | any[] | RegExp
    /**
     * Equivalent to using Vue's native max prop for <keep-alive>
     */
    keepAliveMax? : number
    /**
     * Enable transitions between panel (also see 'transition-prev' and 'transition-next' props)
     */
    animated? : boolean
    /**
     * Makes component appear as infinite (when reaching last panel, next one will become the first one)
     */
    infinite? : boolean
    /**
     * Enable swipe events (may interfere with content's touch/mouse events)
     */
    swipeable? : boolean
    /**
     * Put Stepper in vertical mode (instead of horizontal by default)
     */
    vertical? : boolean
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     */
    transitionPrev? : string
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     */
    transitionNext? : string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Applies a 'flat' design (no default shadow)
     */
    flat? : boolean
    /**
     * Applies a default border to the component
     */
    bordered? : boolean
    /**
     * Use alternative labels - stacks the icon on top of the label (applies only to horizontal stepper)
     */
    alternativeLabels? : boolean
    /**
     * Allow navigation through the header
     */
    headerNav? : boolean
    /**
     * Hide header labels on narrow windows
     */
    contracted? : boolean
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    inactiveIcon? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    inactiveColor? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    doneIcon? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    doneColor? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    activeIcon? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    activeColor? : string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    errorIcon? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    errorColor? : string
    /**
     * Class definitions to be attributed to the header
     */
    headerClass? : string
    /**
     * Go to next panel
     */
    next (): void
    /**
     * Go to previous panel
     */
    previous (): void
    /**
     * Go to specific panel
     * @param panelName Panel's name, which may be a String or Number; Number does not refers to panel index, but to its name, which may be an Integer
     */
    goTo (panelName : string | number): void
}

export interface QStepperNavigation extends ComponentPublicInstance {
}

export interface QTabPanel extends ComponentPublicInstance {
    /**
     * Panel name
     */
    name : any
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
}

export interface QTabPanels extends ComponentPublicInstance {
    /**
     * Model of the component defining the current panel's name; If a Number is used, it does not define the panel's index, but rather the panel's name which can also be an Integer; Either use this property (along with a listener for 'update:model-value' event) OR use the v-model directive.
     */
    modelValue? : any
    /**
     * Equivalent to using Vue's native <keep-alive> component on the content
     */
    keepAlive? : boolean
    /**
     * Equivalent to using Vue's native include prop for <keep-alive>; Values must be valid Vue component names
     */
    keepAliveInclude? : string | any[] | RegExp
    /**
     * Equivalent to using Vue's native exclude prop for <keep-alive>; Values must be valid Vue component names
     */
    keepAliveExclude? : string | any[] | RegExp
    /**
     * Equivalent to using Vue's native max prop for <keep-alive>
     */
    keepAliveMax? : number
    /**
     * Enable transitions between panel (also see 'transition-prev' and 'transition-next' props)
     */
    animated? : boolean
    /**
     * Makes component appear as infinite (when reaching last panel, next one will become the first one)
     */
    infinite? : boolean
    /**
     * Enable swipe events (may interfere with content's touch/mouse events)
     */
    swipeable? : boolean
    /**
     * Default transitions and swipe actions will be on the vertical axis
     */
    vertical? : boolean
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     */
    transitionPrev? : string
    /**
     * One of Quasar's embedded transitions (has effect only if 'animated' prop is set)
     */
    transitionNext? : string
    /**
     * Go to next panel
     */
    next (): void
    /**
     * Go to previous panel
     */
    previous (): void
    /**
     * Go to specific panel
     * @param panelName Panel's name, which may be a String or Number; Number does not refers to panel index, but to its name, which may be an Integer
     */
    goTo (panelName : string | number): void
}

export interface QTable extends ComponentPublicInstance {
    /**
     * Fullscreen mode
     */
    fullscreen? : boolean
    /**
     * Changing route app won't exit fullscreen
     */
    noRouteFullscreenExit? : boolean
    /**
     * Rows of data to display
     */
    rows? : any[]
    /**
     * Property of each row that defines the unique key of each row (the result must be a primitive, not Object, Array, etc); The value of property must be string or a function taking a row and returning the desired (nested) key in the row; If supplying a function then for best performance, reference it from your scope and do not define it inline
     */
    rowKey? : string | Function
    /**
     * Display data using QVirtualScroll (for non-grid mode only)
     */
    virtualScroll? : boolean
    /**
     * Minimum number of rows to render in the virtual list
     */
    virtualScrollSliceSize? : number | string
    /**
     * Ratio of number of rows in visible zone to render before it
     */
    virtualScrollSliceRatioBefore? : number | string
    /**
     * Ratio of number of rows in visible zone to render after it
     */
    virtualScrollSliceRatioAfter? : number | string
    /**
     * Default size in pixels of a row; This value is used for rendering the initial table; Try to use a value close to the minimum size of a row
     */
    virtualScrollItemSize? : number | string
    /**
     * Size in pixels of the sticky header (if using one); A correct value will improve scroll precision
     */
    virtualScrollStickySizeStart? : number | string
    /**
     * Size in pixels of the sticky footer part (if using one); A correct value will improve scroll precision
     */
    virtualScrollStickySizeEnd? : number | string
    /**
     * The number of columns in the table (you need this if you use table-layout: fixed)
     */
    tableColspan? : number | string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Icon name following Quasar convention for stepping to first page; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    iconFirstPage? : string
    /**
     * Icon name following Quasar convention for stepping to previous page; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    iconPrevPage? : string
    /**
     * Icon name following Quasar convention for stepping to next page; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    iconNextPage? : string
    /**
     * Icon name following Quasar convention for stepping to last page; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    iconLastPage? : string
    /**
     * Display data as a grid instead of the default table
     */
    grid? : boolean
    /**
     * Display header for grid-mode also
     */
    gridHeader? : boolean
    /**
     * Dense mode; Connect with $q.screen for responsive behavior
     */
    dense? : boolean
    /**
     * The column definitions (Array of Objects)
     */
    columns? : {
            /**
             * Unique id, identifies column, (used by pagination.sortBy, 'body-cell-[name]' slot, ...)
             */
            name : string
            /**
             * Label for header
             */
            label : string
            /**
             * Row Object property to determine value for this column or function which maps to the required property
             */
            field : string | Function
            /**
             * If we use visible-columns, this col will always be visible
             */
            required? : boolean
            /**
             * Horizontal alignment of cells in this column
             */
            align? : string
            /**
             * Tell QTable you want this column sortable
             */
            sortable? : boolean
            /**
             * Compare function if you have some custom data or want a specific way to compare two rows
             */
            sort? : Function
            /**
             * Set column sort order: 'ad' (ascending-descending) or 'da' (descending-ascending); Overrides the 'column-sort-order' prop
             */
            sortOrder? : 'ad' | 'da'
            /**
             * Function you can apply to format your data
             */
            format? : Function
            /**
             * Style to apply on normal cells of the column
             */
            style? : string | Function
            /**
             * Classes to add on normal cells of the column
             */
            classes? : string | Function
            /**
             * Style to apply on header cells of the column
             */
            headerStyle? : string
            /**
             * Classes to add on header cells of the column
             */
            headerClasses? : string }[]
    /**
     * Array of Strings defining column names ('name' property of each column from 'columns' prop definitions); Columns marked as 'required' are not affected by this property
     */
    visibleColumns? : any[]
    /**
     * Put Table into 'loading' state; Notify the user something is happening behind the covers
     */
    loading? : boolean
    /**
     * Table title
     */
    title? : string
    /**
     * Hide table header layer
     */
    hideHeader? : boolean
    /**
     * Hide table bottom layer regardless of what it has to display
     */
    hideBottom? : boolean
    /**
     * Hide the selected rows banner (if any)
     */
    hideSelectedBanner? : boolean
    /**
     * Hide the default no data bottom layer
     */
    hideNoData? : boolean
    /**
     * Hide the pagination controls at the bottom
     */
    hidePagination? : boolean
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Applies a 'flat' design (no default shadow)
     */
    flat? : boolean
    /**
     * Applies a default border to the component
     */
    bordered? : boolean
    /**
     * Removes border-radius so borders are squared
     */
    square? : boolean
    /**
     * Use a separator/border between rows, columns or all cells
     */
    separator? : 'horizontal' | 'vertical' | 'cell' | 'none'
    /**
     * Wrap text within table cells
     */
    wrapCells? : boolean
    /**
     * Skip the third state (unsorted) when user toggles column sort direction
     */
    binaryStateSort? : boolean
    /**
     * Set column sort order: 'ad' (ascending-descending) or 'da' (descending-ascending); It gets applied to all columns unless a column has its own sortOrder specified in the 'columns' definition prop
     */
    columnSortOrder? : 'ad' | 'da'
    /**
     * Override default text to display when no data is available
     */
    noDataLabel? : string
    /**
     * Override default text to display when user filters the table and no matched results are found
     */
    noResultsLabel? : string
    /**
     * Override default text to display when table is in loading state (see 'loading' prop)
     */
    loadingLabel? : string
    /**
     * Text to display when user selected at least one row; For best performance, reference it from your scope and do not define it inline
     */
    selectedRowsLabel? : Function
    /**
     * Text to override default rows per page label at bottom of table
     */
    rowsPerPageLabel? : string
    /**
     * Text to override default pagination label at bottom of table (unless 'pagination' scoped slot is used); For best performance, reference it from your scope and do not define it inline
     */
    paginationLabel? : Function
    /**
     * CSS style to apply to native HTML <table> element's wrapper (which is a DIV)
     */
    tableStyle? : string | any[] | LooseDictionary
    /**
     * CSS classes to apply to native HTML <table> element's wrapper (which is a DIV)
     */
    tableClass? : string | any[] | LooseDictionary
    /**
     * CSS style to apply to header of native HTML <table> (which is a TR)
     */
    tableHeaderStyle? : string | any[] | LooseDictionary
    /**
     * CSS classes to apply to header of native HTML <table> (which is a TR)
     */
    tableHeaderClass? : string | any[] | LooseDictionary
    /**
     * CSS style to apply to the cards container (when in grid mode)
     */
    cardContainerStyle? : string | any[] | LooseDictionary
    /**
     * CSS classes to apply to the cards container (when in grid mode)
     */
    cardContainerClass? : string | any[] | LooseDictionary
    /**
     * CSS style to apply to the card (when in grid mode) or container card (when not in grid mode)
     */
    cardStyle? : string | any[] | LooseDictionary
    /**
     * CSS classes to apply to the card (when in grid mode) or container card (when not in grid mode)
     */
    cardClass? : string | any[] | LooseDictionary
    /**
     * CSS classes to apply to the title (if using 'title' prop)
     */
    titleClass? : string | any[] | LooseDictionary
    /**
     * String/Object to filter table with; When using an Object it requires 'filter-method' to also be specified since it will be a custom filtering
     */
    filter? : string | LooseDictionary
    /**
     * The actual filtering mechanism; For best performance, reference it from your scope and do not define it inline
     */
    filterMethod? : Function
    /**
     * Pagination object; You can also use the 'v-model:pagination' for synching; When not synching it simply initializes the pagination on first render
     */
    pagination? : {
            /**
             * Column name (from column definition)
             */
            sortBy? : string
            /**
             * Is sorting in descending order?
             */
            descending? : boolean
            /**
             * Page number (1-based)
             */
            page? : number
            /**
             * How many rows per page? 0 means Infinite
             */
            rowsPerPage? : number
            /**
             * For server-side fetching only. How many total database rows are there to be added to the table. If set, causes the QTable to emit @request when data is required.
             */
            rowsNumber? : number }
    /**
     * Options for user to pick (Numbers); Number 0 means 'Show all rows in one page'
     */
    rowsPerPageOptions? : any[]
    /**
     * Selection type
     */
    selection? : 'single' | 'multiple' | 'none'
    /**
     * Keeps the user selection array
     */
    selected? : any[]
    /**
     * Keeps the array with expanded rows keys
     */
    expanded? : any[]
    /**
     * The actual sort mechanism. Function (rows, sortBy, descending) => sorted rows; For best performance, reference it from your scope and do not define it inline
     */
    sortMethod? : Function
    /**
     * Toggles fullscreen mode
     */
    toggleFullscreen (): void
    /**
     * Enter the fullscreen view
     */
    setFullscreen (): void
    /**
     * Leave the fullscreen view
     */
    exitFullscreen (): void
    /**
     * Trigger a server request (emits 'request' event)
     * @param props Request details
     */
    requestServerInteraction (props? : {
            /**
             * Optional pagination object
             */
            pagination? : {
                    /**
                     * Column name (from column definition)
                     */
                    sortBy? : string
                    /**
                     * Is sorting in descending order?
                     */
                    descending? : boolean
                    /**
                     * Page number (1-based)
                     */
                    page? : number
                    /**
                     * How many rows per page? 0 means Infinite
                     */
                    rowsPerPage? : number }
            /**
             * Filtering method (the 'filter-method' prop)
             */
            filter? : Function }): void
    /**
     * Unless using an external pagination Object (through 'v-model:pagination' prop), you can use this method and force the internal pagination to change
     * @param pagination Pagination object
     * @param forceServerRequest Also force a server request
     */
    setPagination (pagination : {
            /**
             * Column name (from column definition)
             */
            sortBy? : string
            /**
             * Is sorting in descending order?
             */
            descending? : boolean
            /**
             * Page number (1-based)
             */
            page? : number
            /**
             * How many rows per page? 0 means Infinite
             */
            rowsPerPage? : number }, forceServerRequest? : boolean): void
    /**
     * Navigates to first page
     */
    firstPage (): void
    /**
     * Navigates to previous page, if available
     */
    prevPage (): void
    /**
     * Navigates to next page, if available
     */
    nextPage (): void
    /**
     * Navigates to last page
     */
    lastPage (): void
    /**
     * Determine if a row has been selected by user
     * @param key Row key value
     * @returns Is row selected or not?
     */
    isRowSelected (key : any): boolean
    /**
     * Clears user selection (emits 'update:selected' with empty array)
     */
    clearSelection (): void
    /**
     * Determine if a row is expanded or not
     * @param key Row key value
     * @returns Is row expanded or not?
     */
    isRowExpanded (key : any): boolean
    /**
     * Sets the expanded rows keys array; Especially useful if not using an external 'expanded' state otherwise just emits 'update:expanded' with the value
     * @param expanded Array containing keys of the expanded rows
     */
    setExpanded (expanded : any[]): void
    /**
     * Trigger a table sort
     * @param col Column name or column definition object
     */
    sort (col : string | LooseDictionary): void
    /**
     * Resets the virtual scroll (if using it) computations; Needed for custom edge-cases
     */
    resetVirtualScroll (): void
    /**
     * Scroll the table to the row with the specified index in page (0 based)
     * @param index The index of the row in page (0 based)
     * @param edge Only for virtual scroll - the edge to align to if the row is not visible already (by default it aligns to end if scrolling towards the end and to start otherwise); If the '-force' version is used then it always aligns
     */
    scrollTo (index : string | number, edge? : 'start' | 'center' | 'end' | 'start-force' | 'center-force' | 'end-force'): void
}

export interface QTd extends ComponentPublicInstance {
    /**
     * QTable's column scoped slot property
     */
    props? : LooseDictionary
    /**
     * Tries to shrink column width size; Useful for columns with a checkbox/radio/toggle
     */
    autoWidth? : boolean
    /**
     * Disable hover effect
     */
    noHover? : boolean
}

export interface QTh extends ComponentPublicInstance {
    /**
     * QTable's header column scoped slot property
     */
    props? : LooseDictionary
    /**
     * Tries to shrink header column width size; Useful for columns with a checkbox/radio/toggle
     */
    autoWidth? : boolean
}

export interface QTr extends ComponentPublicInstance {
    /**
     * QTable's row scoped slot property
     */
    props? : LooseDictionary
    /**
     * Disable hover effect
     */
    noHover? : boolean
}

export interface QRouteTab extends ComponentPublicInstance {
    /**
     * Equivalent to Vue Router <router-link> 'to' property
     */
    to : string | LooseDictionary
    /**
     * Equivalent to Vue Router <router-link> 'exact' property
     */
    exact? : boolean
    /**
     * Equivalent to Vue Router <router-link> 'replace' property
     */
    replace? : boolean
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     */
    activeClass? : string
    /**
     * Equivalent to Vue Router <router-link> 'active-class' property
     */
    exactActiveClass? : string
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    icon? : string
    /**
     * A number or string to label the tab
     */
    label? : number | string
    /**
     * Adds an alert symbol to the tab, notifying the user there are some updates; If its value is not a Boolean, then you can specify a color
     */
    alert? : boolean | string
    /**
     * Adds a floating icon to the tab, notifying the user there are some updates; It's displayed only if 'alert' is set; Can use the color specified by 'alert' prop
     */
    alertIcon? : string
    /**
     * Panel name
     */
    name? : number | string
    /**
     * Turns off capitalizing all letters within the tab (which is the default)
     */
    noCaps? : boolean
    /**
     * Class definitions to be attributed to the content wrapper
     */
    contentClass? : string
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     */
    ripple? : boolean | LooseDictionary
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
}

export interface QTab extends ComponentPublicInstance {
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    icon? : string
    /**
     * A number or string to label the tab
     */
    label? : number | string
    /**
     * Adds an alert symbol to the tab, notifying the user there are some updates; If its value is not a Boolean, then you can specify a color
     */
    alert? : boolean | string
    /**
     * Adds a floating icon to the tab, notifying the user there are some updates; It's displayed only if 'alert' is set; Can use the color specified by 'alert' prop
     */
    alertIcon? : string
    /**
     * Panel name
     */
    name? : number | string
    /**
     * Turns off capitalizing all letters within the tab (which is the default)
     */
    noCaps? : boolean
    /**
     * Class definitions to be attributed to the content wrapper
     */
    contentClass? : string
    /**
     * Configure material ripple (disable it by setting it to 'false' or supply a config object)
     */
    ripple? : boolean | LooseDictionary
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
    /**
     * Put component in disabled mode
     */
    disable? : boolean
}

export interface QTabs extends ComponentPublicInstance {
    /**
     * Model of the component defining current panel name; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     */
    modelValue? : number | string
    /**
     * Use vertical design (tabs one on top of each other rather than one next to the other horizontally)
     */
    vertical? : boolean
    /**
     * Reserve space for arrows to place them on each side of the tabs (the arrows fade when inactive)
     */
    outsideArrows? : boolean
    /**
     * Force display of arrows (if needed) on mobile
     */
    mobileArrows? : boolean
    /**
     * Horizontal alignment the tabs within the tabs container
     */
    align? : 'left' | 'center' | 'right' | 'justify'
    /**
     * Breakpoint (in pixels) of tabs container width at which the tabs automatically turn to a justify alignment
     */
    breakpoint? : number | string
    /**
     * The color to be attributed to the text of the active tab
     */
    activeColor? : string
    /**
     * The color to be attributed to the background of the active tab
     */
    activeBgColor? : string
    /**
     * The color to be attributed to the indicator (the underline) of the active tab
     */
    indicatorColor? : string
    /**
     * Class definitions to be attributed to the content wrapper
     */
    contentClass? : string
    /**
     * The name of an icon to replace the default arrow used to scroll through the tabs to the left, when the tabs extend past the width of the tabs container
     */
    leftIcon? : string
    /**
     * The name of an icon to replace the default arrow used to scroll through the tabs to the right, when the tabs extend past the width of the tabs container
     */
    rightIcon? : string
    /**
     * When used on flexbox parent, tabs will stretch to parent's height
     */
    stretch? : boolean
    /**
     * By default, QTabs is set to grow to the available space; However, you can reverse that with this prop; Useful (and required) when placing the component in a QToolbar
     */
    shrink? : boolean
    /**
     * Switches the indicator position (on left of tab for vertical mode or above the tab for default horizontal mode)
     */
    switchIndicator? : boolean
    /**
     * Allows the indicator to be the same width as the tab's content (text or icon), instead of the whole width of the tab
     */
    narrowIndicator? : boolean
    /**
     * Allows the text to be inline with the icon, should one be used
     */
    inlineLabel? : boolean
    /**
     * Turns off capitalizing all letters within the tab (which is the default)
     */
    noCaps? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
}

export interface QTime extends ComponentPublicInstance {
    /**
     * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
     */
    name? : string
    /**
     * Display the component in landscape mode
     */
    landscape? : boolean
    /**
     * Mask (formatting string) used for parsing and formatting value
     */
    mask? : string
    /**
     * Locale formatting options
     */
    locale? : {
            /**
             * List of full day names (DDDD), starting with Sunday
             */
            days? : any[]
            /**
             * List of short day names (DDD), starting with Sunday
             */
            daysShort? : any[]
            /**
             * List of full month names (MMMM), starting with January
             */
            months? : any[]
            /**
             * List of short month names (MMM), starting with January
             */
            monthsShort? : any[] }
    /**
     * Specify calendar type
     */
    calendar? : 'gregorian' | 'persian'
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     */
    textColor? : string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Removes border-radius so borders are squared
     */
    square? : boolean
    /**
     * Applies a 'flat' design (no default shadow)
     */
    flat? : boolean
    /**
     * Applies a default border to the component
     */
    bordered? : boolean
    /**
     * Put component in readonly mode
     */
    readonly? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Time of the component; Either use this property (along with a listener for 'update:modelValue' event) OR use v-model directive
     */
    modelValue : string
    /**
     * Forces 24 hour time display instead of AM/PM system
     */
    format24h? : boolean
    /**
     * The default date to use (in YYYY/MM/DD format) when model is unfilled (undefined or null)
     */
    defaultDate? : string
    /**
     * Optionally configure what time is the user allowed to set; Overridden by 'hour-options', 'minute-options' and 'second-options' if those are set; For best performance, reference it from your scope and do not define it inline
     */
    options? : Function
    /**
     * Optionally configure what hours is the user allowed to set; Overrides 'options' prop if that is also set
     */
    hourOptions? : any[]
    /**
     * Optionally configure what minutes is the user allowed to set; Overrides 'options' prop if that is also set
     */
    minuteOptions? : any[]
    /**
     * Optionally configure what seconds is the user allowed to set; Overrides 'options' prop if that is also set
     */
    secondOptions? : any[]
    /**
     * Allow the time to be set with seconds
     */
    withSeconds? : boolean
    /**
     * Display a button that selects the current time
     */
    nowBtn? : boolean
    /**
     * Change model to current moment
     */
    setNow (): void
}

export interface QTimeline extends ComponentPublicInstance {
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Side to place the timeline entries in dense and comfortable layout; For loose layout it gets overridden by QTimelineEntry side prop
     */
    side? : 'left' | 'right'
    /**
     * Layout of the timeline. Dense keeps content and labels on one side. Comfortable keeps content on one side and labels on the opposite side. Loose puts content on both sides.
     */
    layout? : 'dense' | 'comfortable' | 'loose'
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
}

export interface QTimelineEntry extends ComponentPublicInstance {
    /**
     * Defines a heading timeline item
     */
    heading? : boolean
    /**
     * Tag to use, if of type 'heading' only
     */
    tag? : string
    /**
     * Side to place the timeline entry; Works only if QTimeline layout is loose.
     */
    side? : 'left' | 'right'
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    icon? : string
    /**
     * URL to the avatar image; Icon takes precedence if used, so it replaces avatar
     */
    avatar? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Title of timeline entry; Is overridden if using 'title' slot
     */
    title? : string
    /**
     * Subtitle of timeline entry; Is overridden if using 'subtitle' slot
     */
    subtitle? : string
    /**
     * Body content of timeline entry; Use this prop or the default slot
     */
    body? : string
}

export interface QToggle extends ComponentPublicInstance {
    /**
     * Used to specify the name of the control; Useful if dealing with forms submitted directly to a URL
     */
    name? : string
    /**
     * Size in CSS units, including unit name or standard size name (xs|sm|md|lg|xl)
     */
    size? : string
    /**
     * Model of the component; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive
     */
    modelValue : any | any[]
    /**
     * Works when model ('value') is Array. It tells the component which value should add/remove when ticked/unticked
     */
    val? : any
    /**
     * What model value should be considered as checked/ticked/on?
     */
    trueValue? : any
    /**
     * What model value should be considered as unchecked/unticked/off?
     */
    falseValue? : any
    /**
     * What model value should be considered as 'indeterminate'?
     */
    indeterminateValue? : any
    /**
     * Determines toggle order of the two states ('t' stands for state of true, 'f' for state of false); If 'toggle-indeterminate' is true, then the order is: indet -> first state -> second state -> indet (and repeat), otherwise: indet -> first state -> second state -> first state -> second state -> ...
     */
    toggleOrder? : 'tf' | 'ft'
    /**
     * When user clicks/taps on the component, should we toggle through the indeterminate state too?
     */
    toggleIndeterminate? : boolean
    /**
     * Label to display along the component (or use the default slot instead of this prop)
     */
    label? : string
    /**
     * Label (if any specified) should be displayed on the left side of the component
     */
    leftLabel? : boolean
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Should the color (if specified any) be kept when the component is unticked/ off?
     */
    keepColor? : boolean
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Dense mode; occupies less space
     */
    dense? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Tabindex HTML attribute value
     */
    tabindex? : number | string
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    icon? : string
    /**
     * The icon to be used when the toggle is on
     */
    checkedIcon? : string
    /**
     * The icon to be used when the toggle is off
     */
    uncheckedIcon? : string
    /**
     * The icon to be used when the model is indeterminate
     */
    indeterminateIcon? : string
    /**
     * Override default icon color (for truthy state only); Color name for component from the Quasar Color Palette
     */
    iconColor? : string
    /**
     * Toggle the state (of the model)
     */
    toggle (): void
}

export interface QToolbar extends ComponentPublicInstance {
    /**
     * Apply an inset to content (useful for subsequent toolbars)
     */
    inset? : boolean
}

export interface QToolbarTitle extends ComponentPublicInstance {
    /**
     * By default, QToolbarTitle is set to grow to the available space. However, you can reverse that with this prop
     */
    shrink? : boolean
}

export interface QTooltip extends ComponentPublicInstance {
    /**
     * One of Quasar's embedded transitions
     */
    transitionShow? : string
    /**
     * One of Quasar's embedded transitions
     */
    transitionHide? : string
    /**
     * Transition duration (in milliseconds, without unit)
     */
    transitionDuration? : string | number
    /**
     * Model of the component defining shown/hidden state; Either use this property (along with a listener for 'update:model-value' event) OR use v-model directive
     */
    modelValue? : boolean
    /**
     * The maximum height of the Tooltip; Size in CSS units, including unit name
     */
    maxHeight? : string
    /**
     * The maximum width of the Tooltip; Size in CSS units, including unit name
     */
    maxWidth? : string
    /**
     * Two values setting the starting position or anchor point of the Tooltip relative to its target
     */
    anchor? : 'top left' | 'top middle' | 'top right' | 'top start' | 'top end' | 'center left' | 'center middle' | 'center right' | 'center start' | 'center end' | 'bottom left' | 'bottom middle' | 'bottom right' | 'bottom start' | 'bottom end'
    /**
     * Two values setting the Tooltip's own position relative to its target
     */
    self? : 'top left' | 'top middle' | 'top right' | 'top start' | 'top end' | 'center left' | 'center middle' | 'center right' | 'center start' | 'center end' | 'bottom left' | 'bottom middle' | 'bottom right' | 'bottom start' | 'bottom end'
    /**
     * An array of two numbers to offset the Tooltip horizontally and vertically in pixels
     */
    offset? : any[]
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one
     */
    scrollTarget? : Element | string
    /**
     * Configure a target element to trigger Tooltip toggle; 'true' means it enables the parent DOM element, 'false' means it disables attaching events to any DOM elements; By using a String (CSS selector) it attaches the events to the specified DOM element (if it exists)
     */
    target? : boolean | string
    /**
     * Skips attaching events to the target DOM element (that trigger the element to get shown)
     */
    noParentEvent? : boolean
    /**
     * Configure Tooltip to appear with delay
     */
    delay? : number
    /**
     * Configure Tooltip to disappear with delay
     */
    hideDelay? : number
    /**
     * Triggers component to show
     * @param evt JS event object
     */
    show (evt? : LooseDictionary): void
    /**
     * Triggers component to hide
     * @param evt JS event object
     */
    hide (evt? : LooseDictionary): void
    /**
     * Triggers component to toggle between show/hide
     * @param evt JS event object
     */
    toggle (evt? : LooseDictionary): void
    /**
     * There are some custom scenarios for which Quasar cannot automatically reposition the tooltip without significant performance drawbacks so the optimal solution is for you to call this method when you need it
     */
    updatePosition (): void
}

export interface QTree extends ComponentPublicInstance {
    /**
     * The array of nodes that designates the tree structure
     */
    nodes : any[]
    /**
     * The property name of each node object that holds a unique node id
     */
    nodeKey : string
    /**
     * The property name of each node object that holds the label of the node
     */
    labelKey? : string
    /**
     * The property name of each node object that holds the list of children of the node
     */
    childrenKey? : string
    /**
     * Do not display the connector lines between nodes
     */
    noConnectors? : boolean
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Color name for controls (like checkboxes) from the Quasar Color Palette
     */
    controlColor? : string
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     */
    textColor? : string
    /**
     * Color name for selected nodes (from the Quasar Color Palette)
     */
    selectedColor? : string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
     */
    icon? : string
    /**
     * The type of strategy to use for the selection of the nodes
     */
    tickStrategy? : 'none' | 'strict' | 'leaf' | 'leaf-filtered'
    /**
     * Keys of nodes that are ticked
     */
    ticked? : any[]
    /**
     * Keys of nodes that are expanded
     */
    expanded? : any[]
    /**
     * Key of node currently selected
     */
    selected? : any
    /**
     * Allow the tree to have all its branches expanded, when first rendered
     */
    defaultExpandAll? : boolean
    /**
     * Allows the tree to be set in accordion mode
     */
    accordion? : boolean
    /**
     * The text value to be used for filtering nodes
     */
    filter? : string
    /**
     * The function to use to filter the tree nodes; For best performance, reference it from your scope and do not define it inline
     */
    filterMethod? : Function
    /**
     * Toggle animation duration (in milliseconds)
     */
    duration? : number
    /**
     * Override default such label for when no nodes are available
     */
    noNodesLabel? : string
    /**
     * Override default such label for when no nodes are available due to filtering
     */
    noResultsLabel? : string
    /**
     * Get the node with the given key
     * @param key The key of a node
     * @returns Requested node
     */
    getNodeByKey (key : any): LooseDictionary
    /**
     * Get array of nodes that are ticked
     * @returns Ticked node objects
     */
    getTickedNodes (): any[]
    /**
     * Get array of nodes that are expanded
     * @returns Expanded node objects
     */
    getExpandedNodes (): any[]
    /**
     * Determine if a node is expanded
     * @param key The key of a node
     * @returns Is specified node expanded?
     */
    isExpanded (key : any): boolean
    /**
     * Use to expand all branches of the tree
     */
    expandAll (): void
    /**
     * Use to collapse all branches of the tree
     */
    collapseAll (): void
    /**
     * Expands the tree at the point of the node with the key given
     * @param key The key of a node
     * @param state Set to 'true' to expand the branch of the tree, otherwise 'false' collapses it
     */
    setExpanded (key : any, state : boolean): void
    /**
     * Method to check if a node's checkbox is selected or not
     * @param key The key of a node
     * @returns Is specified node ticked?
     */
    isTicked (key : any): boolean
    /**
     * Method to set a node's checkbox programmatically
     * @param keys The keys of nodes to tick/untick
     * @param state Set to 'true' to tick the checkbox of nodes, otherwise 'false' unticks them
     */
    setTicked (keys : any[], state : boolean): void
}

export interface QUploader extends ComponentPublicInstance {
    /**
     * Function which should return an Object or a Promise resolving with an Object; For best performance, reference it from your scope and do not define it inline
     */
    factory? : Function
    /**
     * URL or path to the server which handles the upload. Takes String or factory function, which returns String. Function is called right before upload; If using a function then for best performance, reference it from your scope and do not define it inline
     */
    url? : string | Function
    /**
     * HTTP method to use for upload; Takes String or factory function which returns a String; Function is called right before upload; If using a function then for best performance, reference it from your scope and do not define it inline
     */
    method? : 'POST' | 'PUT' | Function
    /**
     * Field name for each file upload; This goes into the following header: 'Content-Disposition: form-data; name="__HERE__"; filename="somefile.png"; If using a function then for best performance, reference it from your scope and do not define it inline
     */
    fieldName? : string | Function
    /**
     * Array or a factory function which returns an array; Array consists of objects with header definitions; Function is called right before upload; If using a function then for best performance, reference it from your scope and do not define it inline
     */
    headers? : {
            /**
             * Header name
             */
            name : string
            /**
             * Header value
             */
            value : string }[] | Function
    /**
     * Array or a factory function which returns an array; Array consists of objects with additional fields definitions (used by Form to be uploaded); Function is called right before upload; If using a function then for best performance, reference it from your scope and do not define it inline
     */
    formFields? : {
            /**
             * Field name
             */
            name : string
            /**
             * Field value
             */
            value : string }[] | Function
    /**
     * Sets withCredentials to true on the XHR that manages the upload; Takes boolean or factory function for Boolean; Function is called right before upload; If using a function then for best performance, reference it from your scope and do not define it inline
     */
    withCredentials? : boolean | Function
    /**
     * Send raw files without wrapping into a Form(); Takes boolean or factory function for Boolean; Function is called right before upload; If using a function then for best performance, reference it from your scope and do not define it inline
     */
    sendRaw? : boolean | Function
    /**
     * Upload files in batch (in one XHR request); Takes boolean or factory function for Boolean; Function is called right before upload; If using a function then for best performance, reference it from your scope and do not define it inline
     */
    batch? : boolean | Function
    /**
     * Allow multiple file uploads
     */
    multiple? : boolean
    /**
     * Comma separated list of unique file type specifiers. Maps to 'accept' attribute of native input type=file element
     */
    accept? : string
    /**
     * Optionally, specify that a new file should be captured, and which device should be used to capture that new media of a type defined by the 'accept' prop. Maps to 'capture' attribute of native input type=file element
     */
    capture? : 'user' | 'environment'
    /**
     * Maximum size of individual file in bytes
     */
    maxFileSize? : number | string
    /**
     * Maximum size of all files combined in bytes
     */
    maxTotalSize? : number | string
    /**
     * Maximum number of files to contain
     */
    maxFiles? : number | string
    /**
     * Custom filter for added files; Only files that pass this filter will be added to the queue and uploaded; For best performance, reference it from your scope and do not define it inline
     */
    filter? : Function
    /**
     * Label for the uploader
     */
    label? : string
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Overrides text color (if needed); Color name from the Quasar Color Palette
     */
    textColor? : string
    /**
     * Notify the component that the background is a dark color
     */
    dark? : boolean
    /**
     * Removes border-radius so borders are squared
     */
    square? : boolean
    /**
     * Applies a 'flat' design (no default shadow)
     */
    flat? : boolean
    /**
     * Applies a default border to the component
     */
    bordered? : boolean
    /**
     * Don't display thumbnails for image files
     */
    noThumbnails? : boolean
    /**
     * Upload files immediately when added
     */
    autoUpload? : boolean
    /**
     * Don't show the upload button
     */
    hideUploadBtn? : boolean
    /**
     * Put component in disabled mode
     */
    disable? : boolean
    /**
     * Put component in readonly mode
     */
    readonly? : boolean
    /**
     * Trigger file pick; Must be called as a direct consequence of user interaction (eg. in a click handler), due to browsers security policy
     * @param evt JS event object
     */
    pickFiles (evt? : LooseDictionary): void
    /**
     * Add files programmatically
     * @param files Array of files (instances of File)
     */
    addFiles (files : FileList | any[]): void
    /**
     * Start uploading (same as clicking the upload button)
     */
    upload (): void
    /**
     * Abort upload of all files (same as clicking the abort button)
     */
    abort (): void
    /**
     * Resets uploader to default; Empties queue, aborts current uploads
     */
    reset (): void
    /**
     * Removes already uploaded files from the list
     */
    removeUploadedFiles (): void
    /**
     * Remove files that are waiting for upload to start (same as clicking the left clear button)
     */
    removeQueuedFiles (): void
    /**
     * Remove specified file from the queue
     * @param file File to remove (instance of File)
     */
    removeFile (file : LooseDictionary): void
}

export interface QUploaderAddTrigger extends ComponentPublicInstance {
}

export interface QVideo extends ComponentPublicInstance {
    /**
     * Aspect ratio for the content; If value is a String, then avoid using a computational statement (like '16/9') and instead specify the String value of the result directly (eg. '1.7777')
     */
    ratio? : string | number
    /**
     * The source url to display in an iframe
     */
    src : string
}

export interface QVirtualScroll extends ComponentPublicInstance {
    /**
     * Make virtual list work in horizontal mode
     */
    virtualScrollHorizontal? : boolean
    /**
     * Minimum number of items to render in the virtual list
     */
    virtualScrollSliceSize? : number | string
    /**
     * Ratio of number of items in visible zone to render before it
     */
    virtualScrollSliceRatioBefore? : number | string
    /**
     * Ratio of number of items in visible zone to render after it
     */
    virtualScrollSliceRatioAfter? : number | string
    /**
     * Default size in pixels (height if vertical, width if horizontal) of an item; This value is used for rendering the initial list; Try to use a value close to the minimum size of an item
     */
    virtualScrollItemSize? : number | string
    /**
     * Size in pixels (height if vertical, width if horizontal) of the sticky part (if using one) at the start of the list; A correct value will improve scroll precision
     */
    virtualScrollStickySizeStart? : number | string
    /**
     * Size in pixels (height if vertical, width if horizontal) of the sticky part (if using one) at the end of the list; A correct value will improve scroll precision
     */
    virtualScrollStickySizeEnd? : number | string
    /**
     * The number of columns in the table (you need this if you use table-layout: fixed)
     */
    tableColspan? : number | string
    /**
     * The type of content: list (default) or table
     */
    type? : 'list' | 'table'
    /**
     * Available list items that will be passed to the scoped slot; For best performance freeze the list of items; Required if 'itemsFn' is not supplied
     */
    items? : any[]
    /**
     * Number of available items in the list; Required and used only if 'itemsFn' is provided
     */
    itemsSize? : number
    /**
     * Function to return the scope for the items to be displayed; Should return an array for items starting from 'from' index for size length; For best performance, reference it from your scope and do not define it inline
     */
    itemsFn? : Function
    /**
     * CSS selector or DOM element to be used as a custom scroll container instead of the auto detected one
     */
    scrollTarget? : Element | string
    /**
     * Scroll the virtual scroll list to the item with the specified index (0 based)
     * @param index The index of the list item (0 based)
     * @param edge The edge to align to if the item is not visible already (by default it aligns to end if scrolling towards the end and to start otherwise); If the '-force' version is used then it always aligns
     */
    scrollTo (index : string | number, edge? : 'start' | 'center' | 'end' | 'start-force' | 'center-force' | 'end-force'): void
    /**
     * Resets the virtual scroll computations; Needed for custom edge-cases
     */
    reset (): void
    /**
     * Refreshes the virtual scroll list; Use it after appending items
     * @param index The index of the list item to scroll to after refresh (0 based); If it's not specified the scroll position is not changed; Use a negative value to keep scroll position
     */
    refresh (index? : string | number): void
}

export interface DialogChainObject {
    /**
     * Receives a Function param to tell what to do when OK is pressed / option is selected
     * @param callbackFn Tell what to do
     * @returns Chained Object
     */
    onOk (callbackFn : Function): DialogChainObject
    /**
     * Receives a Function as param to tell what to do when Cancel is pressed / dialog is dismissed
     * @param callbackFn Tell what to do
     * @returns Chained Object
     */
    onCancel (callbackFn : Function): DialogChainObject
    /**
     * Receives a Function param to tell what to do when the dialog is closed
     * @param callbackFn Tell what to do
     * @returns Chained Object
     */
    onDismiss (callbackFn : Function): DialogChainObject
    /**
     * Hides the dialog when called
     * @returns Chained Object
     */
    hide (): DialogChainObject
    /**
     * Updates the initial properties (given as create() param) except for 'component'
     * @param opts Props (except 'component') which will overwrite the initial create() params; If create() was invoked with a custom dialog component then this param should contain the new componentProps
     * @returns Chained Object
     */
    update (opts? : LooseDictionary): DialogChainObject
}

import { CookiesGetMethodType } from './api'
export interface QDialogOptions {
    /**
     * CSS Class name to apply to the Dialog's QCard
     */
    class? : string | any[] | LooseDictionary
    /**
     * CSS style to apply to the Dialog's QCard
     */
    style? : string | any[] | LooseDictionary
    /**
     * A text for the heading title of the dialog
     */
    title? : string
    /**
     * A text with more information about what needs to be input, selected or confirmed.
     */
    message? : string
    /**
     * Render title and message as HTML; This can lead to XSS attacks, so make sure that you sanitize the message first
     */
    html? : boolean
    /**
     * Position of the Dialog on screen. Standard is centered.
     */
    position? : 'top' | 'right' | 'bottom' | 'left' | 'standard'
    /**
     * An object definition of the input field for the prompting question.
     */
    prompt? : {
            /**
             * The initial value of the input
             */
            model : string
            /**
             * Optional property to determine the input field type
             */
            type? : string
            /**
             * Is typed content valid?
             */
            isValid? : Function
            /**
             * Attributes to pass to prompt control
             */
            attrs? : LooseDictionary
            /**
             * A text label that will “float” up above the input field, once the field gets focus
             */
            label? : string
            /**
             * Label will be always shown above the field regardless of field content (if any)
             */
            stackLabel? : boolean
            /**
             * Use 'filled' design for the field
             */
            filled? : boolean
            /**
             * Use 'outlined' design for the field
             */
            outlined? : boolean
            /**
             * Use 'standout' design for the field; Specifies classes to be applied when focused (overriding default ones)
             */
            standout? : boolean | string
            /**
             * Applies a small standard border-radius for a squared shape of the component
             */
            rounded? : boolean
            /**
             * Remove border-radius so borders are squared; Overrides 'rounded' prop
             */
            square? : boolean
            /**
             * Show an automatic counter on bottom right
             */
            counter? : boolean
            /**
             * Specify a max length of model
             */
            maxlength? : string | number
            /**
             * Prefix
             */
            prefix? : string
            /**
             * Suffix
             */
            suffix? : string }
    /**
     * An object definition for creating the selection form content
     */
    options? : {
            /**
             * The value of the selection (String if it's of type radio or Array otherwise)
             */
            model : string | any[]
            /**
             * The type of selection
             */
            type? : 'radio' | 'checkbox' | 'toggle'
            /**
             * The list of options to interact with; Equivalent to options prop of the QOptionsGroup component
             */
            items? : any[]
            /**
             * Is the model valid?
             */
            isValid? : Function }
    /**
     * Display a Quasar spinner (if value is true, then the defaults are used); Useful for conveying the idea that something is happening behind the covers; Tip: use along with persistent, ok: false and update() method
     */
    progress? : boolean | {
            /**
             * One of the QSpinners
             */
            spinner? : Component
            /**
             * Color name for component from the Quasar Color Palette
             */
            color? : string }
    /**
     * Props for an 'OK' button
     */
    ok? : string | {
            [index: string]: any } | boolean
    /**
     * Props for a 'CANCEL' button
     */
    cancel? : string | {
            [index: string]: any } | boolean
    /**
     * What button to focus, unless you also have 'prompt' or 'options'
     */
    focus? : 'ok' | 'cancel' | 'none'
    /**
     * Makes buttons be stacked instead of vertically aligned
     */
    stackButtons? : boolean
    /**
     * Color name for component from the Quasar Color Palette
     */
    color? : string
    /**
     * Apply dark mode
     */
    dark? : boolean
    /**
     * User cannot dismiss Dialog if clicking outside of it or hitting ESC key; Also, an app route change won't dismiss it
     */
    persistent? : boolean
    /**
     * User cannot dismiss Dialog by hitting ESC key; No need to set it if 'persistent' prop is also set
     */
    noEscDismiss? : boolean
    /**
     * User cannot dismiss Dialog by clicking outside of it; No need to set it if 'persistent' prop is also set
     */
    noBackdropDismiss? : boolean
    /**
     * Changing route app won't dismiss Dialog; No need to set it if 'persistent' prop is also set
     */
    noRouteDismiss? : boolean
    /**
     * Put Dialog into seamless mode; Does not use a backdrop so user is able to interact with the rest of the page too
     */
    seamless? : boolean
    /**
     * Put Dialog into maximized mode
     */
    maximized? : boolean
    /**
     * Dialog will try to render with same width as the window
     */
    fullWidth? : boolean
    /**
     * Dialog will try to render with same height as the window
     */
    fullHeight? : boolean
    /**
     * One of Quasar's embedded transitions
     */
    transitionShow? : string
    /**
     * One of Quasar's embedded transitions
     */
    transitionHide? : string
    /**
     * Use custom dialog component; use along with 'componentProps' prop where possible
     */
    component? : any
    /**
     * User defined props which will be forwarded to underlying custom component if 'component' prop is used
     */
    componentProps? : LooseDictionary
}

import { WebStorageGetItemMethodType } from './api'
import { WebStorageGetIndexMethodType } from './api'
import { WebStorageGetKeyMethodType } from './api'
import { WebStorageGetAllKeysMethodType } from './api'
import { QVueGlobals, QSingletonGlobals } from "./globals";
declare module "./globals" {
export interface QVueGlobals {
    addressbarColor: AddressbarColor
    fullscreen: AppFullscreen
    /**
     * Does the app have user focus? Or the app runs in the background / another tab has the user's attention
     */
    appVisible : boolean
    /**
     * Creates an ad-hoc Bottom Sheet; Same as calling $q.bottomSheet(...)
     * @param opts Bottom Sheet options
     * @returns Chainable Object
     */
    bottomSheet (opts : {
            /**
             * CSS Class name to apply to the Dialog's QCard
             */
            class? : string | any[] | LooseDictionary
            /**
             * CSS style to apply to the Dialog's QCard
             */
            style? : string | any[] | LooseDictionary
            /**
             * Title
             */
            title? : string
            /**
             * Message
             */
            message? : string
            /**
             * Array of Objects, each Object defining an action
             */
            actions? : {
                    /**
                     * CSS classes for this action
                     */
                    classes? : string | any[] | LooseDictionary
                    /**
                     * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
                     */
                    icon? : string
                    /**
                     * Path to an image for this action
                     */
                    img? : string
                    /**
                     * Display img as avatar (round borders)
                     */
                    avatar? : boolean
                    /**
                     * Action label
                     */
                    label? : string | number }[]
            /**
             * Display actions as a grid instead of as a list
             */
            grid? : boolean
            /**
             * Apply dark mode
             */
            dark? : boolean
            /**
             * Put Bottom Sheet into seamless mode; Does not use a backdrop so user is able to interact with the rest of the page too
             */
            seamless? : boolean
            /**
             * User cannot dismiss Bottom Sheet if clicking outside of it or hitting ESC key
             */
            persistent? : boolean }): DialogChainObject
    cookies: Cookies
    dark: Dark
    /**
     * Creates an ad-hoc Dialog; Same as calling $q.dialog(...)
     * @param opts Dialog options
     * @returns Chainable Object
     */
    dialog (opts : QDialogOptions): DialogChainObject
    loading: Loading
    loadingBar: LoadingBar
    localStorage: LocalStorage
    /**
     * Creates a notification; Same as calling $q.notify(...)
     * @param opts Notification options
     * @returns Calling this function with no parameters hides the notification; When called with one Object parameter (the original notification must NOT be grouped), it updates the notification (specified properties are shallow merged with previous ones; note that group and position cannot be changed while updating and so they are ignored)
     */
    notify (opts : {
            /**
             * Optional type (that has been previously registered) or one of the out of the box ones ('positive', 'negative', 'warning', 'info', 'ongoing')
             */
            type? : string
            /**
             * Color name for component from the Quasar Color Palette
             */
            color? : string
            /**
             * Color name for component from the Quasar Color Palette
             */
            textColor? : string
            /**
             * The content of your message
             */
            message? : string
            /**
             * The content of your optional caption
             */
            caption? : string
            /**
             * Render message as HTML; This can lead to XSS attacks, so make sure that you sanitize the message first
             */
            html? : boolean
            /**
             * Icon name following Quasar convention; Make sure you have the icon library installed unless you are using 'img:' prefix
             */
            icon? : string
            /**
             * URL to an avatar/image; Suggestion: use statics folder
             */
            avatar? : string
            /**
             * Useful for notifications that are updated; Displays a Quasar spinner instead of an avatar or icon; If value is Boolean 'true' then the default QSpinner is shown
             */
            spinner? : boolean | Component
            /**
             * Window side/corner to stick to
             */
            position? : 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top' | 'bottom' | 'left' | 'right' | 'center'
            /**
             * Override the auto generated group with custom one; Grouped notifications cannot be updated; String or number value inform this is part of a specific group, regardless of its options; When a new notification is triggered with same group name, it replaces the old one and shows a badge with how many times the notification was triggered
             */
            group? : boolean | string | number
            /**
             * Color name for the badge from the Quasar Color Palette
             */
            badgeColor? : string
            /**
             * Color name for the badge text from the Quasar Color Palette
             */
            badgeTextColor? : string
            /**
             * Notification corner to stick badge to; If notification is on the left side then default is top-right otherwise it is top-left
             */
            badgePosition? : 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
            /**
             * Style definitions to be attributed to the badge
             */
            badgeStyle? : any[] | string | LooseDictionary
            /**
             * Class definitions to be attributed to the badge
             */
            badgeClass? : any[] | string | LooseDictionary
            /**
             * Show progress bar to detail when notification will disappear automatically (unless timeout is 0)
             */
            progress? : boolean
            /**
             * Class definitions to be attributed to the progress bar
             */
            progressClass? : any[] | string | LooseDictionary
            /**
             * Add CSS class(es) to the notification for easier customization
             */
            classes? : string
            /**
             * Key-value for attributes to be set on the notification
             */
            attrs? : LooseDictionary
            /**
             * Amount of time to display (in milliseconds)
             */
            timeout? : number
            /**
             * Notification actions (buttons); If a 'handler' is specified or not, clicking/tapping on the button will also close the notification; Also check 'closeBtn' convenience prop
             */
            actions? : any[]
            /**
             * Function to call when notification gets dismissed
             */
            onDismiss? : Function
            /**
             * Convenience way to add a dismiss button with a specific label, without using the 'actions' prop; If set to true, it uses a label accordding to the current Quasar language
             */
            closeBtn? : boolean | string
            /**
             * Put notification into multi-line mode; If this prop isn't used and more than one 'action' is specified then notification goes into multi-line mode by default
             */
            multiLine? : boolean
            /**
             * Ignore the default configuration (set by setDefaults()) for this instance only
             */
            ignoreDefaults? : boolean } | string): Function
    platform: Platform
    screen: Screen
    sessionStorage: SessionStorage
}
}

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $q: QVueGlobals
    }
}
import { GlobalQuasarLanguage, GlobalQuasarIconSet } from './globals'
export interface QuasarPluginOptions {
    lang: GlobalQuasarLanguage,
    config: any,
    iconSet: GlobalQuasarIconSet,
    components: {
        QAjaxBar?: ComponentOptions
        QAvatar?: ComponentOptions
        QBadge?: ComponentOptions
        QBanner?: ComponentOptions
        QBar?: ComponentOptions
        QBreadcrumbs?: ComponentOptions
        QBreadcrumbsEl?: ComponentOptions
        QBtnDropdown?: ComponentOptions
        QBtnGroup?: ComponentOptions
        QBtnToggle?: ComponentOptions
        QBtn?: ComponentOptions
        QCard?: ComponentOptions
        QCardActions?: ComponentOptions
        QCardSection?: ComponentOptions
        QCarousel?: ComponentOptions
        QCarouselControl?: ComponentOptions
        QCarouselSlide?: ComponentOptions
        QChatMessage?: ComponentOptions
        QCheckbox?: ComponentOptions
        QChip?: ComponentOptions
        QCircularProgress?: ComponentOptions
        QColor?: ComponentOptions
        QDate?: ComponentOptions
        QDialog?: ComponentOptions
        QDrawer?: ComponentOptions
        QEditor?: ComponentOptions
        QExpansionItem?: ComponentOptions
        QFab?: ComponentOptions
        QFabAction?: ComponentOptions
        QField?: ComponentOptions
        QFile?: ComponentOptions
        QFooter?: ComponentOptions
        QForm?: ComponentOptions
        QFormChildMixin?: ComponentOptions
        QHeader?: ComponentOptions
        QIcon?: ComponentOptions
        QImg?: ComponentOptions
        QInfiniteScroll?: ComponentOptions
        QInnerLoading?: ComponentOptions
        QInput?: ComponentOptions
        QIntersection?: ComponentOptions
        QItem?: ComponentOptions
        QItemLabel?: ComponentOptions
        QItemSection?: ComponentOptions
        QList?: ComponentOptions
        QKnob?: ComponentOptions
        QLayout?: ComponentOptions
        QLinearProgress?: ComponentOptions
        QMarkupTable?: ComponentOptions
        QMenu?: ComponentOptions
        QNoSsr?: ComponentOptions
        QOptionGroup?: ComponentOptions
        QPageScroller?: ComponentOptions
        QPageSticky?: ComponentOptions
        QPage?: ComponentOptions
        QPageContainer?: ComponentOptions
        QPagination?: ComponentOptions
        QParallax?: ComponentOptions
        QPopupEdit?: ComponentOptions
        QPopupProxy?: ComponentOptions
        QPullToRefresh?: ComponentOptions
        QRadio?: ComponentOptions
        QRange?: ComponentOptions
        QRating?: ComponentOptions
        QResizeObserver?: ComponentOptions
        QResponsive?: ComponentOptions
        QScrollArea?: ComponentOptions
        QScrollObserver?: ComponentOptions
        QSelect?: ComponentOptions
        QSeparator?: ComponentOptions
        QSkeleton?: ComponentOptions
        QSlideItem?: ComponentOptions
        QSlideTransition?: ComponentOptions
        QSlider?: ComponentOptions
        QSpace?: ComponentOptions
        QSpinner?: ComponentOptions
        QSpinnerAudio?: ComponentOptions
        QSpinnerBall?: ComponentOptions
        QSpinnerBars?: ComponentOptions
        QSpinnerBox?: ComponentOptions
        QSpinnerClock?: ComponentOptions
        QSpinnerComment?: ComponentOptions
        QSpinnerCube?: ComponentOptions
        QSpinnerDots?: ComponentOptions
        QSpinnerFacebook?: ComponentOptions
        QSpinnerGears?: ComponentOptions
        QSpinnerGrid?: ComponentOptions
        QSpinnerHearts?: ComponentOptions
        QSpinnerHourglass?: ComponentOptions
        QSpinnerInfinity?: ComponentOptions
        QSpinnerIos?: ComponentOptions
        QSpinnerOrbit?: ComponentOptions
        QSpinnerOval?: ComponentOptions
        QSpinnerPie?: ComponentOptions
        QSpinnerPuff?: ComponentOptions
        QSpinnerRadio?: ComponentOptions
        QSpinnerRings?: ComponentOptions
        QSpinnerTail?: ComponentOptions
        QSplitter?: ComponentOptions
        QStep?: ComponentOptions
        QStepper?: ComponentOptions
        QStepperNavigation?: ComponentOptions
        QTabPanel?: ComponentOptions
        QTabPanels?: ComponentOptions
        QTable?: ComponentOptions
        QTd?: ComponentOptions
        QTh?: ComponentOptions
        QTr?: ComponentOptions
        QRouteTab?: ComponentOptions
        QTab?: ComponentOptions
        QTabs?: ComponentOptions
        QTime?: ComponentOptions
        QTimeline?: ComponentOptions
        QTimelineEntry?: ComponentOptions
        QToggle?: ComponentOptions
        QToolbar?: ComponentOptions
        QToolbarTitle?: ComponentOptions
        QTooltip?: ComponentOptions
        QTree?: ComponentOptions
        QUploader?: ComponentOptions
        QUploaderAddTrigger?: ComponentOptions
        QVideo?: ComponentOptions
        QVirtualScroll?: ComponentOptions
    },
    directives: {
        ClosePopup?: ClosePopup
        Intersection?: Intersection
        Morph?: Morph
        Mutation?: Mutation
        Ripple?: Ripple
        Scroll?: Scroll
        ScrollFire?: ScrollFire
        TouchHold?: TouchHold
        TouchPan?: TouchPan
        TouchRepeat?: TouchRepeat
        TouchSwipe?: TouchSwipe
    },
    plugins: {
        AddressbarColor?: AddressbarColor
        AppFullscreen?: AppFullscreen
        AppVisibility?: AppVisibility
        BottomSheet?: BottomSheet
        Cookies?: Cookies
        Dark?: Dark
        Dialog?: Dialog
        Loading?: Loading
        LoadingBar?: LoadingBar
        LocalStorage?: LocalStorage
        Meta?: Meta
        Notify?: Notify
        Platform?: Platform
        Screen?: Screen
        SessionStorage?: SessionStorage
    }
}

import './lang'
declare module './lang' {
        export interface QuasarLanguageCodesHolder {
            'ar': true
            'az-Latn': true
            'bg': true
            'ca': true
            'cs': true
            'da': true
            'de': true
            'el': true
            'en-GB': true
            'en-US': true
            'eo': true
            'es': true
            'et': true
            'fa-IR': true
            'fa': true
            'fi': true
            'fr': true
            'gn': true
            'he': true
            'hr': true
            'hu': true
            'id': true
            'is': true
            'it': true
            'ja': true
            'km': true
            'ko-KR': true
            'kur-CKB': true
            'lu': true
            'lv': true
            'ml': true
            'ms': true
            'nb-NO': true
            'nl': true
            'pl': true
            'pt-BR': true
            'pt': true
            'ro': true
            'ru': true
            'sk': true
            'sl': true
            'sr': true
            'sv': true
            'ta': true
            'th': true
            'tr': true
            'ug': true
            'uk': true
            'vi': true
            'zh-CN': true
            'zh-TW': true
        }
}
export as namespace quasar
export * from './ts-helpers'
export * from './utils'
export * from './composables'
export * from './feature-flag'
export * from './globals'
export * from './extras'
export * from './lang'
export * from './api'
export const AddressbarColor: AddressbarColor
export const AppFullscreen: AppFullscreen
export const AppVisibility: AppVisibility
export const BottomSheet: BottomSheet
export const Cookies: Cookies
export const Dark: Dark
export const Dialog: Dialog
export const Loading: Loading
export const LoadingBar: LoadingBar
export const LocalStorage: LocalStorage
export const Meta: Meta
export const Notify: Notify
export const Platform: Platform
export const Screen: Screen
export const SessionStorage: SessionStorage
export const ClosePopup: ClosePopup
export const Intersection: Intersection
export const Morph: Morph
export const Mutation: Mutation
export const Ripple: Ripple
export const Scroll: Scroll
export const ScrollFire: ScrollFire
export const TouchHold: TouchHold
export const TouchPan: TouchPan
export const TouchRepeat: TouchRepeat
export const TouchSwipe: TouchSwipe
export const QAjaxBar: ComponentOptions
export const QAvatar: ComponentOptions
export const QBadge: ComponentOptions
export const QBanner: ComponentOptions
export const QBar: ComponentOptions
export const QBreadcrumbs: ComponentOptions
export const QBreadcrumbsEl: ComponentOptions
export const QBtnDropdown: ComponentOptions
export const QBtnGroup: ComponentOptions
export const QBtnToggle: ComponentOptions
export const QBtn: ComponentOptions
export const QCard: ComponentOptions
export const QCardActions: ComponentOptions
export const QCardSection: ComponentOptions
export const QCarousel: ComponentOptions
export const QCarouselControl: ComponentOptions
export const QCarouselSlide: ComponentOptions
export const QChatMessage: ComponentOptions
export const QCheckbox: ComponentOptions
export const QChip: ComponentOptions
export const QCircularProgress: ComponentOptions
export const QColor: ComponentOptions
export const QDate: ComponentOptions
export const QDialog: ComponentOptions
export const QDrawer: ComponentOptions
export const QEditor: ComponentOptions
export const QExpansionItem: ComponentOptions
export const QFab: ComponentOptions
export const QFabAction: ComponentOptions
export const QField: ComponentOptions
export const QFile: ComponentOptions
export const QFooter: ComponentOptions
export const QForm: ComponentOptions
export const QFormChildMixin: ComponentOptions
export const QHeader: ComponentOptions
export const QIcon: ComponentOptions
export const QImg: ComponentOptions
export const QInfiniteScroll: ComponentOptions
export const QInnerLoading: ComponentOptions
export const QInput: ComponentOptions
export const QIntersection: ComponentOptions
export const QItem: ComponentOptions
export const QItemLabel: ComponentOptions
export const QItemSection: ComponentOptions
export const QList: ComponentOptions
export const QKnob: ComponentOptions
export const QLayout: ComponentOptions
export const QLinearProgress: ComponentOptions
export const QMarkupTable: ComponentOptions
export const QMenu: ComponentOptions
export const QNoSsr: ComponentOptions
export const QOptionGroup: ComponentOptions
export const QPageScroller: ComponentOptions
export const QPageSticky: ComponentOptions
export const QPage: ComponentOptions
export const QPageContainer: ComponentOptions
export const QPagination: ComponentOptions
export const QParallax: ComponentOptions
export const QPopupEdit: ComponentOptions
export const QPopupProxy: ComponentOptions
export const QPullToRefresh: ComponentOptions
export const QRadio: ComponentOptions
export const QRange: ComponentOptions
export const QRating: ComponentOptions
export const QResizeObserver: ComponentOptions
export const QResponsive: ComponentOptions
export const QScrollArea: ComponentOptions
export const QScrollObserver: ComponentOptions
export const QSelect: ComponentOptions
export const QSeparator: ComponentOptions
export const QSkeleton: ComponentOptions
export const QSlideItem: ComponentOptions
export const QSlideTransition: ComponentOptions
export const QSlider: ComponentOptions
export const QSpace: ComponentOptions
export const QSpinner: ComponentOptions
export const QSpinnerAudio: ComponentOptions
export const QSpinnerBall: ComponentOptions
export const QSpinnerBars: ComponentOptions
export const QSpinnerBox: ComponentOptions
export const QSpinnerClock: ComponentOptions
export const QSpinnerComment: ComponentOptions
export const QSpinnerCube: ComponentOptions
export const QSpinnerDots: ComponentOptions
export const QSpinnerFacebook: ComponentOptions
export const QSpinnerGears: ComponentOptions
export const QSpinnerGrid: ComponentOptions
export const QSpinnerHearts: ComponentOptions
export const QSpinnerHourglass: ComponentOptions
export const QSpinnerInfinity: ComponentOptions
export const QSpinnerIos: ComponentOptions
export const QSpinnerOrbit: ComponentOptions
export const QSpinnerOval: ComponentOptions
export const QSpinnerPie: ComponentOptions
export const QSpinnerPuff: ComponentOptions
export const QSpinnerRadio: ComponentOptions
export const QSpinnerRings: ComponentOptions
export const QSpinnerTail: ComponentOptions
export const QSplitter: ComponentOptions
export const QStep: ComponentOptions
export const QStepper: ComponentOptions
export const QStepperNavigation: ComponentOptions
export const QTabPanel: ComponentOptions
export const QTabPanels: ComponentOptions
export const QTable: ComponentOptions
export const QTd: ComponentOptions
export const QTh: ComponentOptions
export const QTr: ComponentOptions
export const QRouteTab: ComponentOptions
export const QTab: ComponentOptions
export const QTabs: ComponentOptions
export const QTime: ComponentOptions
export const QTimeline: ComponentOptions
export const QTimelineEntry: ComponentOptions
export const QToggle: ComponentOptions
export const QToolbar: ComponentOptions
export const QToolbarTitle: ComponentOptions
export const QTooltip: ComponentOptions
export const QTree: ComponentOptions
export const QUploader: ComponentOptions
export const QUploaderAddTrigger: ComponentOptions
export const QVideo: ComponentOptions
export const QVirtualScroll: ComponentOptions
export const Quasar: { install: (app: App, options: Partial<QuasarPluginOptions>) => any } & QSingletonGlobals
export default Quasar

import './shim-icon-set'
import './shim-lang'
