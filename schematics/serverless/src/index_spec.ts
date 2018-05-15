// import * as path from 'path';
// import { SchematicTestRunner, UnitTestTree } from '@angular-devkit/schematics/testing';
//
// const collectionPath = path.join(__dirname, '../collection.json');
//
// xdescribe('my-component', () => {
//     console.log(collectionPath);
//     const prerequisiteRunner = new SchematicTestRunner('@schematics/angular', collectionPath);
//
//     const schematicRunner = new SchematicTestRunner('@ng-toolkit/serverless', collectionPath);
//
//     const defaultOptions = {
//         name: 'foo',
//         inlineStyle: false,
//         inlineTemplate: false,
//         routing: false,
//         style: 'css',
//         skipTests: false,
//         skipPackageJson: false,
//         version: '6.0.0'
//     };
//
//     let workspaceTree: UnitTestTree;
//     beforeEach(() => {
//         console.log('beforeach');
//         workspaceTree = prerequisiteRunner.runSchematic('ng-new', {...defaultOptions});
//         console.log('runned schematics');
//         console.log(workspaceTree.files);
//     });
//
//     it('should create all files of an application', () => {
//         const options = { ...defaultOptions };
//         const tree = schematicRunner.runSchematic('ng-add', options, workspaceTree);
//         const files = tree.files;
//
//         checkIfFileExists(files,'/foo/tsconfig.json');
//         checkIfFileExists(files,'/foo/tslint.json');
//         checkIfFileExists(files,'/foo/angular.json');
//         checkIfFileExists(files,'/foo/credentials.js');
//         checkIfFileExists(files,'/foo/LICENSE');
//         checkIfFileExists(files,'/foo/local.js');
//         checkIfFileExists(files,'/foo/ngsw-config.json');
//         checkIfFileExists(files,'/foo/postinstall.js');
//         checkIfFileExists(files,'/foo/README.md');
//         checkIfFileExists(files,'/foo/src/environments/environment.ts');
//         checkIfFileExists(files,'/foo/src/environments/environment.prod.ts');
//         checkIfFileExists(files,'/foo/src/favicon.ico');
//         checkIfFileExists(files,'/foo/src/index.html');
//         checkIfFileExists(files,'/foo/src/main.browser.ts');
//         checkIfFileExists(files,'/foo/src/manifest.json');
//         checkIfFileExists(files,'/foo/src/main.server.ts');
//         checkIfFileExists(files,'/foo/src/polyfills.ts');
//         checkIfFileExists(files,'/foo/src/styles.css');
//         checkIfFileExists(files,'/foo/src/test.ts');
//         checkIfFileExists(files,'/foo/src/tsconfig.app.json');
//         checkIfFileExists(files,'/foo/src/tsconfig.server.json');
//         checkIfFileExists(files,'/foo/src/tsconfig.spec.json');
//         checkIfFileExists(files,'/foo/src/app/app.module.ts');
//         checkIfFileExists(files,'/foo/src/app/app.component.css');
//         checkIfFileExists(files,'/foo/src/app/app.component.html');
//         checkIfFileExists(files,'/foo/src/app/app.component.spec.ts');
//         checkIfFileExists(files,'/foo/src/app/app.component.ts');
//     });
// });
//
// function checkIfFileExists(files: string[], fileName: string) {
//     expect(files.indexOf(fileName)).toBeGreaterThanOrEqual(0, `Lack of ${fileName}`);
// }