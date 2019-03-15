/*! datatable.js | Bulkit | CSS Ninja */

/* ==========================================================================
Dashboard datatable JS file
========================================================================== */

$(document).ready(function ($) {

    "use strict";

    if ($('#basic-datatable').length) {

        var basicDatatable = new DataTable(document.querySelector('#basic-datatable'), {
            pageSize: 5,
            sort: [true, true, false],
            filters: [true, false, false],
            filterText: 'Type to Filter... ',
            pagingDivSelector: "#paging-basic-datatable",
            firstPage: '<i class="material-icons">arrow_back</i>',
            lastPage: '<i class="material-icons">arrow_forward</i>',
            nextPage: '<i class="material-icons">keyboard_arrow_right</i>',
            prevPage: '<i class="material-icons">keyboard_arrow_left</i>',
            data: [
                {
                    firstname: 'Albert',
                    lastname: 'Einstein',
                    position: 'Scientist'
                },
                {
                    firstname: 'Linus',
                    lastname: 'Torvalds',
                    position: 'Scientist'
                },
                {
                    firstname: 'Ada',
                    lastname: 'Lovelace',
                    position: 'Scientist'
                },
                {
                    firstname: 'Helen',
                    lastname: 'Miller',
                    position: 'Scientist'
                },
                {
                    firstname: 'John',
                    lastname: 'Doe',
                    position: 'Scientist'
                },
                {
                    firstname: 'Adam',
                    lastname: 'Bradley',
                    position: 'Scientist'
                },
                {
                    firstname: 'Steve',
                    lastname: 'Krucziak',
                    position: 'Scientist'
                }
            ]
        });

    }

    if ($('#bordered-datatable').length) {

        var basicDatatable = new DataTable(document.querySelector('#bordered-datatable'), {
            pageSize: 5,
            sort: [true, true, false],
            filters: [true, false, false],
            filterText: 'Type to Filter... ',
            pagingDivSelector: "#paging-bordered-datatable",
            firstPage: '<i class="material-icons">arrow_back</i>',
            lastPage: '<i class="material-icons">arrow_forward</i>',
            nextPage: '<i class="material-icons">keyboard_arrow_right</i>',
            prevPage: '<i class="material-icons">keyboard_arrow_left</i>',
            data: [
                {
                    firstname: 'Albert',
                    lastname: 'Einstein',
                    position: 'Scientist'
                },
                {
                    firstname: 'Linus',
                    lastname: 'Torvalds',
                    position: 'Scientist'
                },
                {
                    firstname: 'Ada',
                    lastname: 'Lovelace',
                    position: 'Scientist'
                },
                {
                    firstname: 'Helen',
                    lastname: 'Miller',
                    position: 'Scientist'
                },
                {
                    firstname: 'John',
                    lastname: 'Doe',
                    position: 'Scientist'
                },
                {
                    firstname: 'Adam',
                    lastname: 'Bradley',
                    position: 'Scientist'
                },
                {
                    firstname: 'Steve',
                    lastname: 'Krucziak',
                    position: 'Scientist'
                }
            ]
        });

    }

    if ($('#striped-datatable').length) {

        var basicDatatable = new DataTable(document.querySelector('#striped-datatable'), {
            pageSize: 5,
            sort: [true, true, false],
            filters: [true, false, false],
            filterText: 'Type to Filter... ',
            pagingDivSelector: "#paging-striped-datatable",
            firstPage: '<i class="material-icons">arrow_back</i>',
            lastPage: '<i class="material-icons">arrow_forward</i>',
            nextPage: '<i class="material-icons">keyboard_arrow_right</i>',
            prevPage: '<i class="material-icons">keyboard_arrow_left</i>',
            data: [
                {
                    firstname: 'Albert',
                    lastname: 'Einstein',
                    position: 'Scientist'
                },
                {
                    firstname: 'Linus',
                    lastname: 'Torvalds',
                    position: 'Scientist'
                },
                {
                    firstname: 'Ada',
                    lastname: 'Lovelace',
                    position: 'Scientist'
                },
                {
                    firstname: 'Helen',
                    lastname: 'Miller',
                    position: 'Scientist'
                },
                {
                    firstname: 'John',
                    lastname: 'Doe',
                    position: 'Scientist'
                },
                {
                    firstname: 'Adam',
                    lastname: 'Bradley',
                    position: 'Scientist'
                },
                {
                    firstname: 'Steve',
                    lastname: 'Krucziak',
                    position: 'Scientist'
                }
            ]
        });

    }

    if ($('#narrow-datatable').length) {

        var basicDatatable = new DataTable(document.querySelector('#narrow-datatable'), {
            pageSize: 5,
            sort: [true, true, false],
            filters: [true, false, false],
            filterText: 'Type to Filter... ',
            pagingDivSelector: "#paging-narrow-datatable",
            firstPage: '<i class="material-icons">arrow_back</i>',
            lastPage: '<i class="material-icons">arrow_forward</i>',
            nextPage: '<i class="material-icons">keyboard_arrow_right</i>',
            prevPage: '<i class="material-icons">keyboard_arrow_left</i>',
            data: [
                {
                    firstname: 'Albert',
                    lastname: 'Einstein',
                    position: 'Scientist'
                },
                {
                    firstname: 'Linus',
                    lastname: 'Torvalds',
                    position: 'Scientist'
                },
                {
                    firstname: 'Ada',
                    lastname: 'Lovelace',
                    position: 'Scientist'
                },
                {
                    firstname: 'Helen',
                    lastname: 'Miller',
                    position: 'Scientist'
                },
                {
                    firstname: 'John',
                    lastname: 'Doe',
                    position: 'Scientist'
                },
                {
                    firstname: 'Adam',
                    lastname: 'Bradley',
                    position: 'Scientist'
                },
                {
                    firstname: 'Steve',
                    lastname: 'Krucziak',
                    position: 'Scientist'
                }
            ]
        });

    }

    if ($('#hoverable-datatable').length) {

        var basicDatatable = new DataTable(document.querySelector('#hoverable-datatable'), {
            pageSize: 5,
            sort: [true, true, false],
            filters: [true, false, false],
            filterText: 'Type to Filter... ',
            pagingDivSelector: "#paging-hoverable-datatable",
            firstPage: '<i class="material-icons">arrow_back</i>',
            lastPage: '<i class="material-icons">arrow_forward</i>',
            nextPage: '<i class="material-icons">keyboard_arrow_right</i>',
            prevPage: '<i class="material-icons">keyboard_arrow_left</i>',
            data: [
                {
                    firstname: 'Albert',
                    lastname: 'Einstein',
                    position: 'Scientist'
                },
                {
                    firstname: 'Linus',
                    lastname: 'Torvalds',
                    position: 'Scientist'
                },
                {
                    firstname: 'Ada',
                    lastname: 'Lovelace',
                    position: 'Scientist'
                },
                {
                    firstname: 'Helen',
                    lastname: 'Miller',
                    position: 'Scientist'
                },
                {
                    firstname: 'John',
                    lastname: 'Doe',
                    position: 'Scientist'
                },
                {
                    firstname: 'Adam',
                    lastname: 'Bradley',
                    position: 'Scientist'
                },
                {
                    firstname: 'Steve',
                    lastname: 'Krucziak',
                    position: 'Scientist'
                }
            ]
        });

    }

    if ($('#advanced-datatable').length) {

        var datatable = new DataTable(document.querySelector('#advanced-datatable'), {
            pageSize: 5,
            sort: [true, true, false],
            filters: [false, true, true, false, true, false],
            filterText: 'Type to Filter... ',
            pagingDivSelector: "#paging-first-datatable",
            firstPage: '<i class="material-icons">arrow_back</i>',
            lastPage: '<i class="material-icons">arrow_forward</i>',
            nextPage: '<i class="material-icons">keyboard_arrow_right</i>',
            prevPage: '<i class="material-icons">keyboard_arrow_left</i>',
            data: [
                {
                    picture: '<img class="datatable-avatar" src="https://via.placeholder.com/250x250" data-demo-src="assets/images/avatars/nick.jpg">',
                    firstname: 'Nick',
                    lastname: 'Schwartz',
                    position: 'Manager',
                    status: '<span class="tag">Available</span>',
                    action: `
                        <div class="dropdown is-right dropdown-trigger styled-dropdown is-round">
                            <div class="button">
                                <i class="material-icons">more_vert</i>
                            </div>
                            <div class="dropdown-menu is-text-bigger has-text-left" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                        <i class="sl sl-icon-eye"></i>
                                        <span>
                                            <span>View</span>
                                            <span>View contact</span>
                                        </span>
                                    </a>
                                    <a class="dropdown-item">
                                        <i class="sl sl-icon-pencil"></i>
                                        <span>
                                            <span>Edit</span>
                                            <span>Edit this contact</span>
                                        </span>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item">
                                        <i class="sl sl-icon-trash"></i>
                                        <span>
                                            <span>Delete</span>
                                            <span>Delete this contact</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    `
                },
                {
                    picture: '<img class="datatable-avatar" src="https://via.placeholder.com/250x250" data-demo-src="assets/images/avatars/elie.jpg">',
                    firstname: 'Elie',
                    lastname: 'Daniels',
                    position: 'Head of Sales',
                    status: '<span class="tag">Busy</span>',
                    action: `
                        <div class="dropdown is-right dropdown-trigger styled-dropdown is-round">
                            <div class="button">
                                <i class="material-icons">more_vert</i>
                            </div>
                            <div class="dropdown-menu is-text-bigger has-text-left" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                        <i class="sl sl-icon-eye"></i>
                                        <span>
                                            <span>View</span>
                                            <span>View contact</span>
                                        </span>
                                    </a>
                                    <a class="dropdown-item">
                                        <i class="sl sl-icon-pencil"></i>
                                        <span>
                                            <span>Edit</span>
                                            <span>Edit this contact</span>
                                        </span>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item">
                                        <i class="sl sl-icon-trash"></i>
                                        <span>
                                            <span>Delete</span>
                                            <span>Delete this contact</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    `
                },
                {
                    picture: '<img class="datatable-avatar" src="https://via.placeholder.com/250x250"  data-demo-src="assets/images/avatars/lakisha.jpg">',
                    firstname: 'Lakisha',
                    lastname: 'Jackson',
                    position: 'HR Director',
                    status: '<span class="tag">Offline</span>',
                    action: `
                        <div class="dropdown is-right dropdown-trigger styled-dropdown is-round">
                            <div class="button">
                                <i class="material-icons">more_vert</i>
                            </div>
                            <div class="dropdown-menu is-text-bigger has-text-left" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                        <i class="sl sl-icon-eye"></i>
                                        <span>
                                            <span>View</span>
                                            <span>View contact</span>
                                        </span>
                                    </a>
                                    <a class="dropdown-item">
                                        <i class="sl sl-icon-pencil"></i>
                                        <span>
                                            <span>Edit</span>
                                            <span>Edit this contact</span>
                                        </span>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item">
                                        <i class="sl sl-icon-trash"></i>
                                        <span>
                                            <span>Delete</span>
                                            <span>Delete this contact</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    `
                },
                {
                    picture: '<img class="datatable-avatar" src="https://via.placeholder.com/250x250" data-demo-src="assets/images/avatars/helen.jpg">',
                    firstname: 'Helen',
                    lastname: 'Miller',
                    position: 'Sales Manager',
                    status: '<span class="tag">Offline</span>',
                    action: `
                        <div class="dropdown is-right dropdown-trigger styled-dropdown is-round">
                            <div class="button">
                                <i class="material-icons">more_vert</i>
                            </div>
                            <div class="dropdown-menu is-text-bigger has-text-left" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                        <i class="sl sl-icon-eye"></i>
                                        <span>
                                            <span>View</span>
                                            <span>View contact</span>
                                        </span>
                                    </a>
                                    <a class="dropdown-item">
                                        <i class="sl sl-icon-pencil"></i>
                                        <span>
                                            <span>Edit</span>
                                            <span>Edit this contact</span>
                                        </span>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item">
                                        <i class="sl sl-icon-trash"></i>
                                        <span>
                                            <span>Delete</span>
                                            <span>Delete this contact</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    `
                },
                {
                    picture: '<img class="datatable-avatar" src="https://via.placeholder.com/250x250" data-demo-src="assets/images/avatars/terry.jpg">',
                    firstname: 'Terry',
                    lastname: 'Daniels',
                    position: 'Scientist',
                    status: '<span class="tag">Offline</span>',
                    action: `
                        <div class="dropdown is-right dropdown-trigger styled-dropdown is-round">
                            <div class="button">
                                <i class="material-icons">more_vert</i>
                            </div>
                            <div class="dropdown-menu is-text-bigger has-text-left" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                        <i class="sl sl-icon-eye"></i>
                                        <span>
                                            <span>View</span>
                                            <span>View contact</span>
                                        </span>
                                    </a>
                                    <a class="dropdown-item">
                                        <i class="sl sl-icon-pencil"></i>
                                        <span>
                                            <span>Edit</span>
                                            <span>Edit this contact</span>
                                        </span>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item">
                                        <i class="sl sl-icon-trash"></i>
                                        <span>
                                            <span>Delete</span>
                                            <span>Delete this contact</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    `
                },
                {
                    picture: '<img class="datatable-avatar" src="https://via.placeholder.com/250x250" data-demo-src="assets/images/avatars/alan.jpg">',
                    firstname: 'Alan',
                    lastname: 'Maynard',
                    position: 'BP Manager',
                    status: '<span class="tag">Offline</span>',
                    action: `
                        <div class="dropdown is-right dropdown-trigger styled-dropdown is-round">
                            <div class="button">
                                <i class="material-icons">more_vert</i>
                            </div>
                            <div class="dropdown-menu is-text-bigger has-text-left" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                        <i class="sl sl-icon-eye"></i>
                                        <span>
                                            <span>View</span>
                                            <span>View contact</span>
                                        </span>
                                    </a>
                                    <a class="dropdown-item">
                                        <i class="sl sl-icon-pencil"></i>
                                        <span>
                                            <span>Edit</span>
                                            <span>Edit this contact</span>
                                        </span>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item">
                                        <i class="sl sl-icon-trash"></i>
                                        <span>
                                            <span>Delete</span>
                                            <span>Delete this contact</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    `
                },
                {
                    picture: '<img class="datatable-avatar" src="https://via.placeholder.com/250x250" data-demo-src="assets/images/avatars/christina.jpg">',
                    firstname: 'Christina',
                    lastname: 'Chu',
                    position: 'Designer',
                    status: '<span class="tag">Offline</span>',
                    action: `
                        <div class="dropdown is-right dropdown-trigger styled-dropdown is-round">
                            <div class="button">
                                <i class="material-icons">more_vert</i>
                            </div>
                            <div class="dropdown-menu is-text-bigger has-text-left" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">
                                        <i class="sl sl-icon-eye"></i>
                                        <span>
                                            <span>View</span>
                                            <span>View contact</span>
                                        </span>
                                    </a>
                                    <a class="dropdown-item">
                                        <i class="sl sl-icon-pencil"></i>
                                        <span>
                                            <span>Edit</span>
                                            <span>Edit this contact</span>
                                        </span>
                                    </a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item">
                                        <i class="sl sl-icon-trash"></i>
                                        <span>
                                            <span>Delete</span>
                                            <span>Delete this contact</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                    `
                }
            ]
        });

        setTimeout(function(){
            //Change demo images
            $('*[data-demo-src]').each(function () {
                var newSrc = $(this).attr('data-demo-src');
                $(this).attr('src', newSrc);
            });
        }, 1000);

    }



    $('.pagination li').click(function () {
        $('.pagination li.is-selected').removeClass('is-selected');
        $(this).addClass('is-selected');
    })

})