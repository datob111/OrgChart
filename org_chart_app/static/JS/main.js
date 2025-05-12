import {chart} from "./chartData.js";

$(function() {
    var $searchButton = $("#search button")
    var $searchText = $("#search input")
    // search employee

    function showChildren($node){
        let $level = $node.data('nodeData').level
        let $parent = $node
        for (let i=0; i<$level-1; i++){
            $parent = oc.getParent($parent)
            // if (!oc.getNodeState($parent, 'children'))[1]
                oc.showChildren($parent)
        }
    }

    $searchButton.on('click', ()=>{
        for (let i=0; i<employees.length; i++){
            if ($searchText.val().trim()!=='' && employees[i].name.toLowerCase().includes($searchText.val().toLowerCase())){
            try {
                showChildren($(`.node${employees[i].id}`))
            }catch (e){
                console.log(e)
            }

                $(`.node${employees[i].id}`).addClass('highlight')
                    setTimeout(()=>$(`.node${employees[i].id}`).removeClass('highlight'), 2000)
                try{
                   // console.log($(`#image${employees[i].id}`).offset())
                    let $nodeLeft = $(`#image${employees[i].id}`).offset().left
                    let $nodeWidth = $(`#image${employees[i].id}`).outerWidth()
                    let $nodeCenter = $nodeLeft + $nodeWidth / 2

                    let $chartLeft = $(`#chart`).offset().left
                    let $chartWidth = $(`#chart`).width()
                    let $cardHeight= $(`#chart`).height()
                    let $scrollLeft = $nodeLeft - $chartLeft - $chartWidth / 2;
                    $("#chart").animate({
                        scrollTop: $(`#image${employees[i].id}`).offset().top,
                        // scrollLeft: $(`#image${employees[i].id}`).offset().left
                    }, 1000)
                    // console.log('card - ', $(`#image${employees[i].id}`).offset())
                    // console.log('chart - ', $(`#image${employees[i].id}`).marginTop)
                    // console.log()
                  }catch(e){
                    console.log(e)
                  }
            }
        }
    });

    var $zoomIn = $("#zoomIn")
    $zoomIn.on('click', ()=>{
        if ($(".orgchart")[0].style.scale<2.5)
        $(".orgchart")[0].style.scale = Number($(".orgchart")[0].style.scale) + 0.05
    })
// document.getElementById('er').addEventListener('mousedown')
     var $zoomOut = $("#zoomOut")
    $zoomOut.on('click', ()=>{
        if ($(".orgchart")[0].style.scale>0.2)
        $(".orgchart")[0].style.scale = Number($(".orgchart")[0].style.scale) - 0.05
    })

    var employees = []

       // remove employee

       function removePopUp($name, $id, $node, $data){
        let $modalJQ = $("<dialog>", {
          'id': 'my_modal_1',
          'class': 'modal'
        })

        let $modalBoxJQ = $("<div>", {
          'class': 'modal-box'
        })
        let $pJQ = $("<div>", {
          'class': 'py-4',
          'html': `ARE YOU SURE TO REMOVE ${$name.toUpperCase()}?`
        })

        let $modalActionJQ = $("<div>", {
          'class': 'modal-action'
        })

        let $formBoxJQ = $("<div>", {
          'method': 'dialog'
        })

        let $buttons = $("<div>", {
            'class': 'buttons'
        })

        let $removeButtonJQ = $("<button>", {
          'class': 'btn remove',
          'id': 'acceptRemove',
          'html': 'remove',
        })

        let $closeButtonJQ = $("<button>", {
          'class': 'btn close',
          'html': 'close'
        })

        $buttons.append($removeButtonJQ)
        $buttons.append($closeButtonJQ)
        $formBoxJQ.append($buttons)
        $modalActionJQ.append($formBoxJQ)

        $modalBoxJQ.append($pJQ)
        $modalBoxJQ.append($modalActionJQ)

        $modalJQ.append($modalBoxJQ)

        $("body").append($modalJQ)

        my_modal_1.showModal()

        $removeButtonJQ.on('click', ()=>{
          $modalJQ.attr('id', $id)
           $("dialog").remove()
          oc.removeNodes($node)

            employees = employees.filter((e)=>{
                return e.id != $data.id
            })

            let $parentIndex = employees.findIndex((e)=>{
                return e.id === $data.parentId
            })

            employees[$parentIndex].children = employees[$parentIndex].children.filter((e)=>{
                return e.id != $data.id
            })
            console.log(employees)

        })

        $formBoxJQ.on('submit', (e)=>{
          e.preventDefault()
        })

        $closeButtonJQ.on('click', ()=>{
          $modalJQ.attr('id', $id)
          $("body").remove($modalJQ);
          $("dialog").remove();

        })
       }


       // add employee

       function AddEmployee($node, $data){
        let $modalJQ = $("<dialog>", {
          'id': 'my_modal_2',
          'class': 'modal'
        })

        let $modalBoxJQ = $("<div>", {
          'class': 'modal-box'
        })
        let $pJQ = $("<div>", {
          'class': 'py-4',
          'html': 'Add New Employee'
        })

        let $modalActionJQ = $("<div>", {
        })

        let $formBoxJQ = $("<div>", {
          'method': 'dialog',
          'class': 'dialog'
        })

        let $name= $("<input>", {
          'type': 'text',
          'placeholder': 'name',
          'class': 'employeeNameInput',
        })

        let $title= $("<input>", {
          'type': 'text',
          'placeholder': 'title',
          'class': 'employeeTitleInput',
        })

        let $inputs = $("<div>", {
          'class': 'inputs'
        })

        $inputs.append($name)
        $inputs.append($title)

        let $closeButtonJQ = $("<button>", {
          'class': 'btn',
          'html': 'close'
        })

        let $submitButtonJQ = $("<button>", {
          'class': `btn addBtn${$data.id}`,
          'html': 'Save',
          'id': 'saveBtn'
        })

        let $buttons = $("<buttons>", {
          'class': 'addButtons'
        })

        $buttons.append($submitButtonJQ)
        $buttons.append($closeButtonJQ)

        $formBoxJQ.append($inputs)
        $formBoxJQ.append($buttons)
        $modalActionJQ.append($formBoxJQ)

        $modalBoxJQ.append($pJQ)
        $modalBoxJQ.append($modalActionJQ)

        $modalJQ.append($modalBoxJQ)

        $("body").append($modalJQ)

        my_modal_2.showModal()

        $closeButtonJQ.on('click', ()=>{
           $("dialog").remove()
        })

        $submitButtonJQ.on('click', ()=>{
        if ($name.val().length < 3 || $title.val().length < 5){
            let $warning=$("<div>", {
                'class': 'warningContainer'
            })
                $warning.append(`
                    <div role="alert" class="alert alert-warning">
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                        <span>Warning: invalid input!</span>
                      </div>
                        `
                )
            $modalBoxJQ.prepend($warning)
            setTimeout(()=>{
                $warning.remove()
            }, 2000)
        }else{
            let $newNode =  {
               'name': $name.val(),
               'title': $title.val(),
               'id': Date.now(),
               'parentId': $data.id,
               'level': $data.level + 1,
               'relationship': $data.relationship
               }

               // employees.push($newNode)
            let $parentIndex = employees.findIndex(function (e){
                return e.id === $data.id
            })

            if (!oc.getNodeState($node, 'children').exist){
            oc.addChildren($node,
              [
              $newNode
             ]
           )
                employees[$parentIndex].children = []

          }else{
            let $firstChild = oc.getRelatedNodes($node, 'children').eq(0)
            oc.addSiblings($firstChild,
              [
               $newNode
             ]
           )
          }
            $("dialog").remove()
            employees[$parentIndex].children.push($newNode)
            console.log(employees)
        }

       })
       }

       //change manager of employee

       function updateHierarchy($employeeData, $managerData){

        let $employeeIndex = employees.findIndex(function (e){
            return e.id === $employeeData.id
        })
        let $oldEmployeeIndex = employees.findIndex(function (e){
            return e.id === $employeeData.parentId
        })
        let $managerIndex = employees.findIndex(function (e){
            return e.id === $managerData.id
        })
        employees[$employeeIndex].parentId = $managerData.id
        employees[$employeeIndex].level = $managerData.level + 1
        if (employees[$managerIndex].children) {
                employees[$managerIndex].children.push(employees[$employeeIndex])
        }else{
            employees[$managerIndex].children = []
            employees[$managerIndex].children.push(employees[$employeeIndex])
        }
        employees[$oldEmployeeIndex].children = employees[$oldEmployeeIndex].children.filter((e)=>{
            return e.id != $employeeData.id
        })
       }

       // create a chart

    let oc = $('#chart').orgchart({
      'data' : chart,
      'nodeContent': 'title',
      'toggleSiblingsResp': true,
      'visibleLevel': '3',
      'depth': 2,
      'nodeID': 'id',
      'draggable': true,
      'pan': true,
      'zoom': true,
      'zoominLimit': 5,
      'zoomoutLimit': 0.7,
      'nodeTemplate': function(data){
      //
      //   let $divCont = $("<div>", {
      //     'class': 'userInfo'
      //   })
      //
      //   let $name = $("<input>", {
      //     'value': data.name,
      //     'readonly': true,
      //     'class': 'employeeName'
      //   })
      //
      //   let $title = $("<input>", {
      //     'value': data.title,
      //     'readonly': true,
      //     'class': 'employeeTitle'
      //   })
      //
      //   let $department = $("<input>", {
      //     'value': data.department || 'add department',
      //     'readonly': true,
      //     'class': 'employeeDepartment'
      //   })
      //
      // let $employeeIndex = employees.findIndex(function (e){
      //       return Number(e.id)+1 === Number(data.id)
      //   })
      //
      //   let $parentIndex = employees.findIndex((e)=>{
      //       return Number(e.id)+1 === Number(data.parentId)
      //       })
      //
      //   $name.on('dblclick', ()=>{
      //     $name.prop('readonly', false).focus();
      //   })
      //
      //   $name.on('keypress', (e)=>{
      //     if (e.key === 'Enter'){
      //       $name.prop('readonly', true).focus();
      //       data.name = $name.val()
      //         employees[$employeeIndex+1].name= $name.val()
      //         console.log($employeeIndex)
      //     }
      //   })
      //
      //   $title.on('dblclick', ()=>{
      //     $title.prop('readonly', false).focus();
      //   })
      //
      //   $title.on('keypress', (e)=>{
      //     if (e.key === 'Enter'){
      //       $title.prop('readonly', true).focus();
      //       data.title =$title.val()
      //       employees[$employeeIndex+1].title = $title.val()
      //     }
      //   })
      //
      //   $department.on('dblclick', ()=>{
      //     $department.prop('readonly', false).focus();
      //   })
      //
      //   $department.on('keypress', (e)=>{
      //     if (e.key === 'Enter'){
      //       $department.prop('readonly', true).focus();
      //       data.$department =$title.val()
      //       employees[$employeeIndex+1].$department = $department.val()
      //     }
      //   })
      //
      //
      //   $divCont.append($name)
      //   $divCont.append($title)
      //   $divCont.append($department)
      //
      //   return $divCont
      },
      'createNode': function($node, data) {

          let $divCont = $("<div>", {
          'class': 'userInfo'
        })

        let $name = $("<input>", {
          'value': data.name,
          'readonly': true,
          'class': 'employeeName'
        })

        let $title = $("<input>", {
          'value': data.title,
          'readonly': true,
          'class': 'employeeTitle'
        })

        let $department = $("<input>", {
          'value': data.department || 'add department',
          'readonly': true,
          'class': 'employeeDepartment'

        })
        let $imageContainer = $("<div>", {
            'class': 'imgContainer',
            'id': `image${data.id}`
        })
          employees.push(data)

        let $image = $("<img>", {
            'class': 'avatar imgContainer',
            'src': window.STATIC_URLS.exampleImage
        })

          let $employeeIndex = employees.findIndex(function (e){
            return Number(e.id)+1 === Number(data.id)
        })

          $name.on('dblclick', ()=>{
          $name.prop('readonly', false).focus();
        })

        $name.on('keypress', (e)=>{
          if (e.key === 'Enter'){
            $name.prop('readonly', true).focus();
            data.name = $name.val()
              employees[$employeeIndex+1].name= $name.val()
              console.log($employeeIndex)
          }
        })

        $title.on('dblclick', ()=>{
          $title.prop('readonly', false).focus();
        })

        $title.on('keypress', (e)=>{
          if (e.key === 'Enter'){
            $title.prop('readonly', true).focus();
            data.title =$title.val()
            employees[$employeeIndex+1].title = $title.val()
          }
        })

        $department.on('dblclick', ()=>{
          $department.prop('readonly', false).focus();
        })

        $department.on('keypress', (e)=>{
          if (e.key === 'Enter'){
            $department.prop('readonly', true).focus();
            data.$department =$title.val()
            employees[$employeeIndex+1].$department = $department.val()
          }
        })


        $divCont.append($name)
        $divCont.append($title)
        $divCont.append($department)

          $imageContainer.append($image)
          $node.prepend($divCont)
          $node.prepend($imageContainer)


            let $deleteButton = $("<i>", {
              'class': 'remove fa-solid fa-user-minus',
          })

          let $addButton = $("<i>", {
            'class': 'add fa-solid fa-user-plus',
          })


          $deleteButton.on('click', ()=>{
            removePopUp(data.name, data.id, $node, data)
          })

          $addButton.on('click', ()=>{
            AddEmployee($node, data)

          })

          let $buttons = $("<div>", {
            'class': 'buttons'
          })

          $buttons.append($deleteButton)
          $buttons.append($addButton)

            $node.append($buttons)
            $node.addClass(`dark node${data.id}`)
      }
    });


    oc.$chart.on('nodedrop.orgchart', (event, extraParams)=>{
        let $title = extraParams.dropZone.data('nodeData').title
        if ($title.toLowerCase().includes('manager')){
          let $manager = extraParams.dropZone.data('nodeData')
          let $employee = extraParams.draggedNode.data('nodeData')
          updateHierarchy($employee, $manager)
        }else{
          console.log('it is not possible to drag!')
          event.preventDefault()
        }
    })

    oc.$chart.on('init.orgchart', ()=>{
        $(".orgchart")[0].style.scale = 0.6
    })

// screenshot the chart
    var getCanvas;
     $("#createPreview").on('click', function () {
         html2canvas($("#chart"), {
             'backgroundColor': 'green',
         onrendered: function (canvas) {
                $("#preview").append(canvas);
                getCanvas = canvas;
             },
    useCORS: true,
    allowTaint: true
         });
    });

    $("#export").on('click', ()=>{
      html2canvas($('#chart'), {
          'scale': 0.5,
          'backgroundColor': 'green',
        onrendered: function(canvas) {
          let dataURL = canvas.toDataURL('image/png')
          let a  = document.createElement('a');
          a.href = dataURL;
          a.download = 'orgChart.png'
          a.click()
        },
          // useCORS: true,
          // scale: 2
          // allowTaint: true
      });
    })


   });

