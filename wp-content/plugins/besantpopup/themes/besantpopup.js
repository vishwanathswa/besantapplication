 var $ = jQuery.noConflict();

function getUTCSecondsfn() {
    var UTCseconds = Math.floor((new Date()).getTime() / 1000);
    return UTCseconds
}
if($('h1').hasClass('nomodalpage')) {
    var noModalPage = !0
}
var exitIndentInc = 0;
if(noModalPage == 1){
	
}else{
	document.addEventListener("mouseleave", function(e) {
		if (readCookie('exitindent') || readCookie('mycookie')) {} else {
			if (e.clientY < 0) {
				saveCookie('exitindent', 'userexitviewport', !1);
				exitIndentInc = 1;
				$('#enqModal').modal('show')
			}
		}
	}, !1);
}
function classFinder(el, selector) {
    var className = " " + selector + " ";
    if ((" " + el.className + " ").replace(/[\n\t\r]/g, " ").indexOf("nmb") > -1) {
        return !0
    }
    return !1
}
var elHtml = document.getElementsByTagName('html')[0];
if (classFinder(elHtml, "nmb")) {
    var message = "<div class=\"ie8-and-bellow\"><div align=\"center\" class=\"upgrade-msg\"><p><img alt=\"Besant Technologies - No.1 Training Institute in Bangalore and Chennai\" src=\"frontend/images/besant-technologies-logo-2_2.png\"></p><p style=\"padding-bottom: 0px; margin-bottom: 0px;\">Looks like you have an older version of Internet explorer!</p><p>Please upgrade your browser to the latest version or download one of the following browsers to proceed.</p><div id=\"browsers\"><a class=\"br1\" href=\"https://www.google.com/intl/en/chrome/browser/\" target=\"_blank\"><img alt=\"Chrome\" src=\"frontend/images/chrome.jpg\">Chrome</a><a class=\"br2\" href=\"http://www.mozilla.org/en-US/firefox/new/\" target=\"_blank\"><img alt=\"Firefox\" src=\"frontend/images/firefox.jpg\">Firefox</a><a class=\"br3\" href=\"http://www.opera.com/computer/windows\" target=\"_blank\"><img alt=\"opera\" src=\"frontend/images/opera.png\">Opera</a><a class=\"br4\" href=\"http://windows.microsoft.com/en-US/internet-explorer/download-ie\" target=\"_blank\"><img alt=\"IE\" src=\"frontend/images/ie.jpg\">IE</a></div></div></div>";
    var oldBrowserContainerDiv = document.createElement("div");
    oldBrowserContainerDiv.innerHTML = message;
    var headWrap = document.getElementsByClassName("headwrap")[0];
    var elBody = document.getElementsByTagName('body')[0];
    elBody.setAttribute("style", "overflow:hidden;");
    elBody.insertBefore(oldBrowserContainerDiv, (elBody.hasChildNodes()) ? elBody.childNodes[0] : null)
}
if ($('.banner_title h1, .offer_pagetitle h1').hasClass('coursepagesingle')) {
    if ($(".coursepagesingle").attr('data-bemscourseid')) {
        var bemsCourseId = $(".coursepagesingle").attr("data-bemscourseid");
        var bemsCourseName = $(".coursepagesingle").attr("data-bemscoursename");
        if(bemsCourseId!="" && bemsCourseName!=""){
            $('#mtxtenqcourse').html('');
            $('#mtxtenqcourse').append($("<option></option>").attr("value", bemsCourseId).attr("data-text", bemsCourseName).text(bemsCourseName)); 
            $('#stxtenqcourse').html('');
            $('#stxtenqcourse').append($("<option></option>").attr("value", bemsCourseId).attr("data-text", bemsCourseName).text(bemsCourseName)); 
        }
        $("div.form-group:nth-child(4)").addClass('d-none');
        $("#mtxtenqcourse").val($(".coursepagesingle").attr('data-bemscourseid'));
        $("#stxtenqcourse").val($(".coursepagesingle").attr('data-bemscourseid'));
    } else {
        var bemsCourseName = $(".coursepagesingle").attr("data-bemscoursename")
    }
    if (!$(".coursepagesingle").attr('data-bemstrainingtypeid')) {
        if ($(".coursepagesingle").attr('data-bemsbranchid')) {
            $("#mtxtenqarea").val($(".coursepagesingle").attr('data-bemsbranchid'))
        }
    } else {
        var bemsTrainingTypeId = $(".coursepagesingle").attr('data-bemstrainingtypeid');
        if (bemsTrainingTypeId == 3)
            var trainingType = 'OnlineTraining';
        else var trainingType = 'CorporateTraining';
        $("#mtxtenqarea").val(trainingType);
        $("div.form-group:nth-child(5)").addClass('d-none')
    }
}

$(document).ready(function() {
    if (typeof initialReferrerToOurSite === 'undefined' || initialReferrerToOurSite === null) {
        var initialReferrerToOurSite = document.referrer;
        saveCookie('initialReferrerToOurSite', initialReferrerToOurSite, !1)
    }
    if (typeof initialLandingPageOfOurSite === 'undefined' || initialLandingPageOfOurSite === null) {
        var initialLandingPageOfOurSite = window.location.href;
        saveCookie('initialLandingPageOfOurSite', initialLandingPageOfOurSite, !1)
    }
    if (typeof beforeEnqTriggerPage === 'undefined' || beforeEnqTriggerPage === null) {
        var beforeEnqTriggerPage = document.referrer;
        saveCookie('beforeEnqTriggerPage', beforeEnqTriggerPage, !0)
    }
    if (!$('html').hasClass('nmb')) {
        trigger_modal()
    }
    /* if ($('body').hasClass('searchenabled')) {
        urlJsonObj = createUrlset()
    } */
});
$('.input__field').blur(function() {
    tmpval = $(this).val();
    if (tmpval == '') {
        $(this).parent().addClass('input--notfilled');
        $(this).parent().removeClass('input--filled')
    } else {
        $(this).parent().addClass('input--filled');
        $(this).parent().removeClass('input--notfilled')
    }
});

/* function createUrlset() {
    urlJsonObj = [];
    $("a[class*=courseanchor]").each(function() {
        var courseTitle = $(this).attr("title");
        var CourseUrl = $(this).attr("href");
        var item = {}
        item.title = courseTitle;
        item.url = CourseUrl;
        urlJsonObj.push(item)
    });
    return urlJsonObj
} */
/* $('#txt-search').keyup(function() {
    var searchField = $(this).val();
    if (searchField === '') {
        $('#filter-records').html('');
        return
    }
    var regex = new RegExp(searchField, "i");
    var output = '<div class="row"><ul>';
    var count = 1;
    $.each(urlJsonObj, function(key, val) {
        if ((val.title.search(regex) != -1) || (val.url.search(regex) != -1)) {
            output += '<li><a href="' + val.url + '">' + val.title + '</a>';
            count++;
            if (count >= 10) {
                return !1
            }
        }
    });
    output += '</ul></div>';
    $('#filter-records').html(output)
});
$('#txt-search').on('focus', function() {
    $('#filter-records').show()
}).on('blur', function() {
    $('#filter-records').hide()
});
$('#filter-records').on('mousedown', function(event) {
    event.preventDefault()
});
 */
function trigger_modal() {
    if (readCookie('mycookie')) {
		
	}else if(noModalPage == 1){
		$('#enqModal .modal-enq').empty();
	} else {
        var utmSource = getURLParameter('utm_source');
        var utmGclid = getURLParameter('gclid');
        if (utmSource == "googleads" || utmGclid != null || utmSource == "fbads" || utmSource == "fb_ads" || utmSource == "google_ads") {
            $("#enqModalLabel").html("Fill & Get upto 25% OFF in Course Fees");
            var utmForm = getURLParameter('utm_form');
            if (utmForm == "closebtninactive") {
                $("#modalClosebtn").remove();
                setTimeout(function() {
                    $('#enqModal').modal({
                        backdrop: 'static',
                        keyboard: !1,
                        show: !0
                    })
                }, 9000)
            } else {
                setTimeout(function() {
                    jQuery('#enqModal').modal({
                        backdrop: 'static',
                        show: !0
                    })
                }, 6000)
            }
        } /* else if ($('.banner_title h1, .offer_pagetitle h1').hasClass('coursepagesingle')) {
            var bemsCourseNameLength = bemsCourseName.length;
            if (bemsCourseNameLength >= 18) {
                $defaultModalLabel = "Get Training Quote for Free";
            } else {
                $defaultModalLabel = "Get " + bemsCourseName + " Training Quote for Free";
            }
            $("#enqModalLabel").html($defaultModalLabel);
            setTimeout(function() {
                $('#enqModal').modal({
                    show: !0
                })
            }, 6000)
        } else {
            $("#enqModalLabel").html("Get Training Quote for Free");
            setTimeout(function() {
                $('#enqModal').modal({
                    show: !0
                })
            }, 6000)
        } */
    }
}


function saveCookie(cookName, cookiedata, force) {
	var date = new Date();
	date.setDate(date.getDate() + 7);
    if (cookName == 'exitindent') {
        document.cookie = cookName + "=" + cookiedata + "; expires=" + date + "; path=/";
    } else {
        if (!readCookie(cookName) || force) {
            document.cookie = cookName + "=" + cookiedata + "; expires=" + date + "; path=/";
        }
    }
}

function readCookie(cookieName) {
    if (document.cookie.length > 0) {
        cookieStart = document.cookie.indexOf(cookieName + "=");
        if (cookieStart != -1) {
            cookieStart = cookieStart + cookieName.length + 1;
            cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length
            }
            return !0
        } else {
            return !1
        }
    } else {
        return !1
    }
}

function clearCookie(name) {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    document.cookie = name + "=''; expires=" + date + "; path=/"
}

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null
}

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return !1
    }
    return !0
}
if (document.getElementById('enqModalFormId')) {
    var formModal = document.querySelector('#enqModalFormId');
    formModal.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm('m')) {
            formProcess('m')
        }
    }, !1)
}
if (document.getElementById('enqFormId')) {
    var formModal = document.querySelector('#enqFormId');
    var modalCloseManual = !1;
    formModal.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm('s')) {
            formProcess('s')
        }
    }, !1)
}
if (document.getElementById('enqtFormId')) {
    var formModal = document.querySelector('#enqtFormId');
    var modalCloseManual = !1;
    formModal.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm('t')) {
            formProcess('t')
        }
    }, !1)
}

function formProcess(formName) {
    if (formName == 'm') {
        var txt = 'Modal'
    } else if (formName == "t") {
        txt = 't'
    } else {
        var txt = ''
    }
    var submitID = '#enq' + txt + 'SubmitId';
    var formID = '#enq' + txt + 'FormId';
    $(submitID).val('Sending');
    $(submitID).attr('disabled', !0);
    if (typeof enqTriggerPage === 'undefined' || enqTriggerPage === null) {
        var enqTriggerPage = window.location.href;
        saveCookie('enqTriggerPage', enqTriggerPage, !0)
    }
    var form_values = $(formID).serializeArray();
    var formurl = $(formID).attr('data-url');
    $.ajax({
        url: formurl,
        data: form_values,
        type: 'POST',
        success: function(result) {
            var result = eval('(' + result + ')');
            if (result.success != !1) {
                successHandler(formName)
            } else {
                errorHandler(formName)
            }
        },
        error: function(result) {
            errorHandler(formName)
        }
    })
}

function successHandler(formName) {
    saveCookie('mycookie', 'besant', !1);
    var successHtmlMsg = "<div id=\"statusmsg\" class=\"successmsg\"><div class=\"w-100 text-center\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAwYzYuNjIzIDAgMTIgNS4zNzcgMTIgMTJzLTUuMzc3IDEyLTEyIDEyLTEyLTUuMzc3LTEyLTEyIDUuMzc3LTEyIDEyLTEyem0wIDFjNi4wNzEgMCAxMSA0LjkyOSAxMSAxMXMtNC45MjkgMTEtMTEgMTEtMTEtNC45MjktMTEtMTEgNC45MjktMTEgMTEtMTF6bS0uMDQ1IDE3LjUxaC0uMDE1Yy0yLjI4NSAwLTQuNDY5LTEuMTg5LTYuMTUzLTMuMzQ5bC43ODktLjYxNGMxLjQ4OSAxLjkxMSAzLjM5NCAyLjk2MyA1LjM2NCAyLjk2M2guMDEzYzEuOTg3LS4wMDQgMy45MDctMS4wNzggNS40MDgtMy4wMjFsLjc5MS42MTFjLTEuNjkzIDIuMTk0LTMuODk0IDMuNDA1LTYuMTk3IDMuNDF6bS0zLjQ2OC0xMC4wMWMuNTUyIDAgMSAuNDQ4IDEgMXMtLjQ0OCAxLTEgMS0xLS40NDgtMS0xIC40NDgtMSAxLTF6bTcuMDEzIDBjLjU1MiAwIDEgLjQ0OCAxIDFzLS40NDggMS0xIDEtMS0uNDQ4LTEtMSAuNDQ4LTEgMS0xeiIvPjwvc3ZnPg==\" style=\"width: 10%;\"></div><div class=\"w-100 text-center pt-3\"><p style=\"color:green;font-size: 18px;\">Yeah!. Your enquiry submitted successfully. One of our team member will get back to you shortly.</p></div></div>";
    if (formName == 'm') {
        $('#enqModalFormId').hide();
        $('#enqModal .modal-enq').append(successHtmlMsg);
        setTimeout(function() {
            $('#enqModal').modal('hide')
        }, 3000);
		gtag('event', 'click', {'leadCapturedSuccess': 'modalEnqCapturedSuccessInsertedDB'});
    } else {
        $('#enqFormId').hide();
        $('#enqtFormId').hide();
        $('.q_tabs_content').append(successHtmlMsg);
        $('#stickyqckformdiv .help-div').append(successHtmlMsg);
        gtag('event', 'click', {'leadCapturedSuccess': 'rightsidebarEnqCapturedSuccessInsertedDB'});
    }
}

function errorHandler(formName) {
    clearCookie("besant");
    var failureHtmlMsg = "<div id=\"statusmsg\" class=\"errormsg\"><div class=\"w-100 text-center errormsg\"><img src=\"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMiAwYzYuNjIzIDAgMTIgNS4zNzcgMTIgMTJzLTUuMzc3IDEyLTEyIDEyLTEyLTUuMzc3LTEyLTEyIDUuMzc3LTEyIDEyLTEyem0wIDFjNi4wNzEgMCAxMSA0LjkyOSAxMSAxMXMtNC45MjkgMTEtMTEgMTEtMTEtNC45MjktMTEtMTEgNC45MjktMTEgMTEtMTF6bS0uMDE5IDE0YzEuODQyLjAwNSAzLjYxMy43OTEgNS4xMTcgMi4yMjRsLS42NjMuNzQ4Yy0xLjMyMy0xLjI3LTIuODY2LTEuOTY4LTQuNDU2LTEuOTcyaC0uMDEzYy0xLjU2OCAwLTMuMDkyLjY3Ny00LjQgMS45MTRsLS42NjQtLjc0OGMxLjQ5MS0xLjQgMy4yNDMtMi4xNjYgNS4wNjQtMi4xNjZoLjAxNXptLTMuNDk0LTYuNWMuNTUyIDAgMSAuNDQ4IDEgMXMtLjQ0OCAxLTEgMS0xLS40NDgtMS0xIC40NDgtMSAxLTF6bTcuMDEzIDBjLjU1MiAwIDEgLjQ0OCAxIDFzLS40NDggMS0xIDEtMS0uNDQ4LTEtMSAuNDQ4LTEgMS0xeiIvPjwvc3ZnPg==\" style=\"width:10%;\"></div><div class=\"w-100 text-center pt-3\"><p style=\"color:red;font-size: 18px;\">Sorry. We missed your enquiry. Please try again after some time. Contact: info@besanttechnologies.com</p></div></div>";
    if (formName == 'm') {
        var submitID = '#enqModalSubmitId';
        $('#enqModalFormId').hide();
        $('#enqModal .modal-enq').append(failureHtmlMsg);
        setTimeout(function() {
            $('#enqModal').modal('hide')
        }, 3000);
        gtag('event', 'click', {'leadCaptureError': 'modalEnqCaptureErrorNotInsertedDB'});
    } else {
        var submitID = '#enqSubmitId';
        $('#enqFormId').hide();
        $('#enqtFormId').hide();
        $('.q_tabs_content').append(failureHtmlMsg);
        gtag('event', 'click', {'leadCaptureError': 'rightsidebarEnqCaptureErrorNotInsertedDB'});
    }
    $(submitID).val('Submit');
    $(submitID).attr('disabled', !1)
}

function validateForm(str) {
    var formFields = ['txtenqname', 'txtenqmobile', 'txtenqemail', 'txtenqcourse', 'txtenqarea', 'txtenqdesc'];
    var finalElementValues = "";
    for (var i = 0; i < formFields.length; i++) {
        var singleElement = str + formFields[i];
        var singleElementValue = $.trim($("#" + singleElement).val());
        if ((singleElementValue == "") || (singleElementValue == "0")) {
            document.getElementById(singleElement).focus();
            document.getElementById(singleElement).className += " select--notfilled";
            gtag('event', 'click', {'leadPartialDatas': finalElementValues});
            return !1
        }
        if (singleElement == str + "txtenqmobile") {
            var onlyNumbers = /^[0-9]+$/;
            if (!(singleElementValue.match(onlyNumbers))) {
                document.getElementById(singleElement).focus();
                document.getElementById(singleElement).className += " select--notfilled";
                gtag('event', 'click', {'leadPartialDatas': finalElementValues});
                return !1
            }
            if (!(singleElementValue.length >= 10)) {
                document.getElementById(singleElement).focus();
                document.getElementById(singleElement).className += " select--notfilled";
                gtag('event', 'click', {'leadPartialDatas': finalElementValues});
                return !1
            }
        }
        if (singleElement == str + "txtenqemail") {
            var emailPattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
            var formEmailData = document.getElementById(singleElement);
            if (!emailPattern.test(singleElementValue)) {
                document.getElementById(singleElement).focus();
                document.getElementById(singleElement).className += " select--notfilled";
                gtag('event', 'click', {'leadPartialDatas': finalElementValues});
                return !1
            }
        }
        finalElementValues += singleElementValue + "--"
    }
    if (str == "m") {
        var modalGaEventLabel = $("#enqModal").data('gaeventlabel');
        finalElementValues = getUTCSecondsfn() + "--" + finalElementValues;
        finalElementValues += modalGaEventLabel + "--";
        gtag('event', 'click', {'leadDatas': finalElementValues});
    } else {
        finalElementValues = getUTCSecondsfn() + "--" + finalElementValues;
        finalElementValues += "rightsidebarEnqData--";
        gtag('event', 'click', {'leadDatas': finalElementValues});
    }
    return !0
}
$('#enqModal').on('show.bs.modal', function(event) {
    if ($('.banner_content h1').hasClass('coursepagesingle')){
     $("#mtxtenqdesc").val('[Form filled from SpecialOffer Three course at 25k]');
    }else if ($('div').hasClass('im_sk_vlogger')){
		$("#mtxtenqdesc").val('[Lead From YouTube AD] im_sk_vlogger');
	}else if ($('div').hasClass('ytadbanner')){
		$("#mtxtenqdesc").val('[Lead From YouTube AD] lungi_boys');
	}else{
     $("#mtxtenqdesc").val('');   
    }
    var anybutton = $(event.relatedTarget);
    if (anybutton.data('gaeventcate') == "leadModalOpen") {
        var modalnewtitle = anybutton.data('modalnewtitle');
        var gaeventcate = anybutton.data('gaeventcate');
        var gaeventlabel = anybutton.data('gaeventlabel');
		var gaeventcourse = anybutton.data('courseid');
        var enqModal = $(this);
        enqModal.attr('data-gaeventcate', gaeventcate);
        enqModal.attr('data-gaeventlabel', gaeventlabel);
        enqModal.find('#enqModalLabel').text(modalnewtitle);
        if (gaeventlabel == "batchRequestMidBody") {
            $("#mtxtenqcourse").addClass('d-none');
        } else if (gaeventlabel == "corporateMidBody") {
            $("#mtxtenqarea").val('CorporateTraining');
            $("#mtxtenqarea").addClass('d-none');
        } else if (gaeventlabel == "groupDiscountMidBody") {
            $("#mtxtenqcourse").addClass('d-none');
            $("#mtxtenqemail").after('<div class="form-group"> <div class="mdl-selectfield input--nao"> <label for="mtxtgdisc">Select Group Discount</label> <select class="browser-default location" onchange="groupdisc();" name="mtxtgdisc" id="mtxtgdisc" required="required"> <option value="">How many ppl?</option> <option value="3 to 4 ppl eligible for 10%">3 - 4 ppl</option> <option value="5 - 9 ppl eligible for 15%">5 - 9 ppl</option> <option value="10+ ppl eligible for 20%">10+ ppl</option></optgroup></select> </div> </div>');
            $("#mtxtenqdesc").addClass('d-none')
        } else if (gaeventlabel == "specialOfferMoreDetails") {
            $("#mtxtenqarea").val('OnlineTraining');
            $("#mtxtenqdesc").val('[Form filled from SpecialOffer Three course at 25k]');
            $("#mtxtenqcourse").addClass('d-none');
            $("#mtxtenqdesc").addClass('d-none');
        } else if (gaeventlabel == "discountMidBody" || gaeventlabel == "onlineTraining") {
            $("#mtxtenqarea").val('OnlineTraining');
            $("#mtxtenqcourse").addClass('d-none');
        } else if(gaeventlabel == "careertransition"){
			if(gaeventcourse!=""){
				$("#mtxtenqcourse").addClass('d-none');
				$("#mtxtenqcourse").val(gaeventcourse);
			}
            $("#mtxtenqdesc").val('[Landing Home Page Career Transition Course]');
            $("#mtxtenqdesc").addClass('d-none');
        } else if(gaeventlabel == "nonitcareergap"){
			if(gaeventcourse!=""){
				$("#mtxtenqcourse").addClass('d-none');
				$("#mtxtenqcourse").val(gaeventcourse);
			}
            $("#mtxtenqdesc").val('[Landing Home Page Training cum Internship Program]');
            $("#mtxtenqdesc").addClass('d-none');
        } else if(gaeventlabel == "jobguarantee"){
			if(gaeventcourse!=""){
				$("#mtxtenqcourse").addClass('d-none');
				$("#mtxtenqcourse").val(gaeventcourse);
			}
            $("#mtxtenqdesc").val('[Landing Home Page Job Guarantee Program]');
            $("#mtxtenqdesc").addClass('d-none');
        } else if (gaeventlabel == "internProgram") {
            $("#mtxtenqdesc").val('[Form filled from Internship Program]');
            $("#mtxtenqdesc").addClass('d-none');
        } else if (gaeventlabel == "youtubeAdLeads") {
			$("#mtxtenqarea").val('1');
            $("#mtxtenqdesc").val('[Lead From YouTube AD]');
            $("#mtxtenqarea").addClass('d-none');
			$("#mtxtenqdesc").addClass('d-none');
        } else{
            $("#mtxtenqarea").val('OnlineTraining');
        }
        gtag('event', 'click', {gaeventcate: gaeventlabel});
    } else {
        var enqModal = $(this);
        if (exitIndentInc == 1) {
            enqModal.attr('data-gaeventcate', 'leadModalOpen');
            enqModal.attr('data-gaeventlabel', 'exitIndentModalOpens');
            var gaaction = 'exitIndent';
            var galabel = 'exitIndentModalOpens';
            enqModal.find('#enqModalLabel').text('WAIT.!! This enquiry might change your career')
        } else {
            enqModal.attr('data-gaeventcate', 'leadModalOpen');
            enqModal.attr('data-gaeventlabel', 'defaultSetTimeOutModalOpens');
            var gaaction = 'noclick';
            var galabel = 'defaultSetTimeOutModalOpens'
        }
        gtag('event', gaaction, {'leadModalOpen': galabel});
    }
});
$('#enqModal').on('shown.bs.modal', function(event) {
    $(this).find('input:text:visible:first').focus()
});
$('#modalClosebtn').click(function() {
    modalCloseManual = !0
});
$("#enqModal").on('hide.bs.modal', function(e) {
     if ($(this).attr('data-gaeventlabel') == "corporateMidBody") {
        $("#mtxtenqarea").val('');
        $("#mtxtenqarea").removeClass('d-none');
    } else if ($(this).attr('data-gaeventlabel') == "groupDiscountMidBody") {
        $(".form-group:nth-child(4)").remove();
        $("#mtxtenqdesc").removeClass('d-none');
    } else if ($(this).attr('data-gaeventlabel') == "batchRequestMidBody") {
        $("#mtxtenqcourse").removeClass('d-none');
    } else if ($(this).attr('data-gaeventlabel') == "downloadCourseSyllabus") {
        if (readCookie('mycookie')) {
            //demoFromHTML();
        }
    } else if ($(this).attr('data-gaeventlabel') == "getCertifiedtMidBody" || $(this).attr('data-gaeventlabel') == "internProgram") {
		$("#mtxtenqdesc").removeClass('d-none');
    } else if ($(this).attr('data-gaeventlabel') == "specialOfferMoreDetails") {
        $("#mtxtenqarea").val('');
        $("#mtxtenqdesc").val('');
        //$("#mtxtenqcourse").removeClass('d-none');
		//$("#mtxtenqdesc").removeClass('d-none');
    } else if ($(this).attr('data-gaeventlabel') == "youtubeAdLeads") {
        $("#mtxtenqarea").val('');
        $("#mtxtenqdesc").val('');
    } else if ($(this).attr('data-gaeventlabel') == "discountMidBody" || $(this).attr('data-gaeventlabel') == "onlineTraining") {
        $("#mtxtenqarea").val('');
        $("#mtxtenqcourse").removeClass('d-none');
    } else if($(this).attr('data-gaeventlabel') == "careertransition" || $(this).attr('data-gaeventlabel') == "nonitcareergap" || $(this).attr('data-gaeventlabel') == "jobguarantee"){
        $("#mtxtenqdesc").val('');
        $("#mtxtenqarea").removeClass('d-none');
		$("#mtxtenqcourse").removeClass('d-none');
    }
});
$("#enqModal").on('hidden.bs.modal', function(e) {
    $("#enqModalLabel").html("Quick Enquiry");
    $("#enqModal").attr('data-gaeventcate', '');
    $("#enqModal").attr('data-gaeventlabel', '');
    if ($('#statusmsg').hasClass('errormsg')) {
        $('#enqModalFormId').show();
        document.getElementById('enqModalFormId').reset();
        $('#enqModalFormId').find('.input--filled').removeClass("input--filled");
        $('.errormsg').remove()
    }
});
if ($('div').hasClass('online_banner')) {
    $('#mtxtenqcourse option[value=' + $(".coursepagesingle").attr("data-bemscourseid") + ']').attr('selected', 'selected');
    $('#mtxtenqarea option[value="OnlineTraining"]').attr('selected', 'selected');
    $("#mtxtenqarea, #mtxtenqcourse").css("display", "none")
}


function groupdisc() {
    if ($("#mtxtgdisc").val() != "")
        $("#mtxtenqdesc").val('GroupDisc ' + $("#mtxtgdisc").val() + ' off');
    else $("#mtxtenqdesc").val('')
}