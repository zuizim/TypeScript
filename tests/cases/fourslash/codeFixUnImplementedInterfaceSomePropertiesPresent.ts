/// <reference path='fourslash.ts' />

//// interface I {
////     x: number;
////     y: number;
////     z: number;
//// }
////
//// class C implements I {[|   |]
////    constructor(public x: number) { }
////    y: number;
//// }

verify.rangeAfterCodeFix(`
z: number;
`);
