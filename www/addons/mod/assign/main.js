// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

angular.module('mm.addons.mod_assign', ['mm.core'])

.constant('mmaModAssignComponent', 'mmaModAssign')
.constant('mmaModAssignSubmissionComponent', 'mmaModAssignSubmission')
.constant('mmaModAssignSubmissionStatusNew', 'new')
.constant('mmaModAssignSubmissionStatusSubmitted', 'submitted')
.constant('mmaModAssignAttemptReopenMethodNone', 'none')
.constant('mmaModAssignUnlimitedAttempts', -1)
.constant('mmaModAssignGradingStatusGraded', 'graded')
.constant('mmaModAssignGradingStatusNotGraded', 'notgraded')
.constant('mmaModMarkingWorkflowStateReleased', 'released')
.constant('mmaModAssignSubmissionInvalidated', 'mma_mod_assign_submission_invalidated')

.config(function($stateProvider) {

    $stateProvider

    .state('site.mod_assign', {
        url: '/mod_assign',
        params: {
            module: null,
            courseid: null
        },
        views: {
            'site': {
                controller: 'mmaModAssignIndexCtrl',
                templateUrl: 'addons/mod/assign/templates/index.html'
            }
        }
    })

    .state('site.mod_assign-submission-list', {
        url: '/mod_assign-submission-list',
        params: {
            moduleid: null,
            modulename: null,
            sid: null,
            courseid: null
        },
        views: {
            'site': {
                controller: 'mmaModAssignSubmissionListCtrl',
                templateUrl: 'addons/mod/assign/templates/submissionlist.html'
            }
        }
    })

    .state('site.mod_assign-submission', {
        url: '/mod_assign-submission',
        params: {
            submitid: null,
            blindid: null,
            moduleid: null,
            courseid: null
        },
        views: {
            'site': {
                controller: 'mmaModAssignSubmissionReviewCtrl',
                templateUrl: 'addons/mod/assign/templates/submissionreview.html'
            }
        }
    });

})

.config(function($mmCourseDelegateProvider, $mmContentLinksDelegateProvider, $mmCoursePrefetchDelegateProvider) {
    $mmCourseDelegateProvider.registerContentHandler('mmaModAssign', 'assign', '$mmaModAssignHandlers.courseContent');
    $mmContentLinksDelegateProvider.registerLinkHandler('mmaModAssign', '$mmaModAssignHandlers.linksHandler');
    $mmCoursePrefetchDelegateProvider.registerPrefetchHandler('mmaModAssign', 'assign', '$mmaModAssignPrefetchHandler');
});