/*! kanban.js | Bulkit | CSS Ninja */

/* ==========================================================================
Dashboard kanban JS file
========================================================================== */

$(document).ready(function(){

    "use strict";

    if ($('.kanban-main-wrap').length) {

        var KanbanSize = $('.kanban-main-wrap').width();
        console.log(KanbanSize);
        $('.section-wrapper').css({
            'maxWidth': '1810'
        });

        //Create board
        $('.board-placeholder .placeholder-inner').on('click', function(){
            $(this).closest('.board-placeholder').find('.placeholder-inner, .create-box').toggleClass('is-hidden');
            $('.create-box input').focus();
        })
        //Cancel board creation
        $('#cancel-board').on('click', function(){
            $(this).closest('.board-placeholder').find('.placeholder-inner, .create-box').toggleClass('is-hidden');
            $('.create-box input').val('');
        })
        //Rename board
        $().renameKanbanBoard();

        //Delete board
        $().deleteKanbanBoard();

        //Dragula setup
        var drake = dragula(
            [document.querySelector('.board-box')].concat(
                Array.from(document.querySelectorAll('.items'))
            ),
            {
                revertOnSpill: true
            }
        ).on('drop', dropBounty);

        //Update bounty section counter
        function dropBounty(el) {
            $('.board-box').each(function () {
                var bountyCount = $(this).find('.box').length;
                $('.header-meta .count span', this).html(bountyCount);
                if (bountyCount == 0) {
                    $(this).addClass('is-empty');
                } else {
                    $(this).removeClass('is-empty');
                }
            })
        }

        //Board template empty variable
        var boardTemplate = '';

        //Create board link
        $('#create-board').on('click', function(){
            var boardName = $(this).closest('.create-box').find('input').val();
            boardTemplate = `
                <div class="column is-3 board">
                    <div class="board-box is-empty">
                        <div class="box-header">
                            <div class="control is-hidden">
                                <input type="text" class="input rename-input">
                            </div>
                            <div class="header-meta">
                                <div class="name">${boardName}</div>
                                <div class="count">
                                    <span>0</span>
                                </div>
                            </div>
                            <div class="dropdown is-right dropdown-trigger contacts-grid-dropdown">
                                <div class="button">
                                    <i class="material-icons">more_horiz</i>
                                </div>
                                <div class="dropdown-menu is-text-bigger" role="menu">
                                    <div class="dropdown-content">
                                        <a href="#" class="dropdown-item rename-board kill-drop">
                                            <i class="sl sl-icon-pencil"></i>
                                            <span>
                                                <span>Rename</span>
                                                <span>Edit column name</span>
                                            </span>
                                        </a>
                                        <a class="dropdown-item">
                                            <i class="sl sl-icon-lock"></i>
                                            <span>
                                                <span>Lock</span>
                                                <span>Locks the column</span>
                                            </span>
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a href="#" class="dropdown-item">
                                            <i class="sl sl-icon-bell"></i>
                                            <span>
                                                <span>Notifications</span>
                                                <span>Be notified of changes</span>
                                            </span>
                                        </a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item delete-board alert-box-trigger kill-drop" data-alert-box="delete-board-alert">
                                            <i class="sl sl-icon-trash"></i>
                                            <span>
                                                <span>Delete</span>
                                                <span>Delete this column</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="items">
                            <div class="column-placeholder">
                                <img class="placeholder-image" src="assets/images/illustrations/kanban-placeholder.svg" alt="">
                                <div class="placeholder-text has-text-centered">
                                    <h3>No Deals</h3>
                                    <p>Nothing in here yet. Create a deal or drag an exiting one in here.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `
            if (boardName.length !== 0) {
                $.when($(boardTemplate).insertBefore('.is-create-board')).then(function () {
                    $('.board-placeholder').find('.placeholder-inner, .create-box').toggleClass('is-hidden');
                    $('.create-box input').val('');
                    if (window.matchMedia('(max-width: 1024px)').matches) {
                        $('.boards-wrapper').animate({ scrollLeft: '+=235' }, 500, 'easeOutQuad');
                    } else {
                        $('.boards-wrapper').animate({ scrollLeft: '+=352' }, 500, 'easeOutQuad');
                    }
                    //Reset the delete board handler
                    $('.delete-current-column').off();
                    $().initDropdowns();
                    //Setup rename board
                    $().renameKanbanBoard();
                    //Setup modals
                    $().initAlertBoxes();
                    //Setup delete board
                    $().deleteKanbanBoard();

                    //Dragula setup
                    drake.destroy();
                    drake = dragula(
                        [document.querySelector('.board-box')].concat(
                            Array.from(document.querySelectorAll('.items'))
                        ),
                        {
                            revertOnSpill: true
                        }
                    ).on('drop', dropBounty);

                    //Evaluate the number of column to show or hide navigation buttons
                    var columnCount = $('.boards-wrapper .board').length;
                    if (columnCount > 3) {
                        $('#next-board, #prev-board').removeClass('is-disabled');
                    } else {
                        $('#next-board, #prev-board').addClass('is-disabled');
                    }

                    iziToast.show({
                        class: 'success-toast',
                        icon: 'im im-icon-Add-Window',
                        title: 'Board added successfully!',
                        message: '',
                        titleColor: '#fff',
                        messageColor: '#fff',
                        iconColor: "#fff",
                        backgroundColor: '#7F00FF',
                        progressBarColor: '#444F60',
                        position: 'bottomRight',
                        transitionIn: 'fadeInDown',
                        close: false,
                        timeout: 2000,
                        zindex: 99999,
                    });
                })
            }

        })

        //Board navigation
        $('#next-board').on('click', function(){
            //$('.boards-wrapper').animate({ scrollLeft: '+=352' }, 500, 'easeOutQuad');
            if (window.matchMedia('(max-width: 1024px)').matches) {
                $('.boards-wrapper').animate({ scrollLeft: '+=235' }, 500, 'easeOutQuad');
            } else {
                $('.boards-wrapper').animate({ scrollLeft: '+=352' }, 500, 'easeOutQuad');
            }
        })
        $('#prev-board').on('click', function () {
            //$('.boards-wrapper').animate({ scrollLeft: '+=-352' }, 500, 'easeOutQuad');
            if (window.matchMedia('(max-width: 1024px)').matches) {
                $('.boards-wrapper').animate({ scrollLeft: '+=-235' }, 500, 'easeOutQuad');
            } else {
                $('.boards-wrapper').animate({ scrollLeft: '+=-352' }, 500, 'easeOutQuad');
            }
        })
    }

})