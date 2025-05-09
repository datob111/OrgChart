$(function() {
    var $searchButton = $("#search button")
    var $searchText = $("#search input")

    $searchButton.on('click', ()=>{
        for (let i=0; i<employees.length; i++){
            if ($searchText.val().trim()!=='' && employees[i].name.toLowerCase().includes($searchText.val().toLowerCase())){

                $(`.node${employees[i].id}`).addClass('highlight')
                    setTimeout(()=>$(`.node${employees[i].id}`).removeClass('highlight'), 2000)
                try{
                   console.log($(`#image${employees[i].id}`).offset())
                    console.log($("#chart").offset())
                    let $nodeLeft = $(`#image${employees[i].id}`).offset().left
                    let $nodeWidth = $(`#image${employees[i].id}`).outerWidth()
                    let $nodeCenter = $nodeLeft + $nodeWidth / 2

                    let $chartLeft = $(`#chart`).offset().left
                    let $chartWidth = $(`#chart`).width()
                    let $scrollLeft = $nodeLeft - $chartLeft - $chartWidth / 2;
                    $("#chart").animate({
                        scrollTop: $(`#image${employees[i].id}`).offset().top - 100,
                        // scrollLeft: $scrollLeft
                    }, 1000)
                    console.log($(`#image${employees[i].id}`).offset())
                  }catch(e){
                    console.log(e)
                  }
            }
        }
    });

    var $zoomIn = $("#zoomIn")
    $zoomIn.on('click', ()=>{
        console.log($(".orgchart"))
    })

    var datascource = {
  "name": "Lao Lao",
  "title": "General Manager",
  "id": "1",
  "img_url": "https://example.com/images/employee_1.jpg",
  "children": [
    {
      "name": "Su Miao",
      "title": "Department Manager",
      "department": "Department_1",
      "id": "2",
      "parentId": "1",
      "img_url": "https://example.com/images/employee_2.jpg",
      "children": [
        {
          "name": "Tie Hua",
          "title": "Senior Engineer",
          "id": "3",
          "parentId": "2",
          "img_url": "https://example.com/images/employee_3.jpg"
        },
        {
          "name": "Yu Lei",
          "title": "Team Lead Manager",
          "department": "Department_1",
          "id": "4",
          "parentId": "2",
          "img_url": "https://example.com/images/employee_4.jpg",
          "children": [
            {
              "name": "Pang Pang",
              "title": "Engineer",
              "id": "5",
              "parentId": "4",
              "img_url": "https://example.com/images/employee_5.jpg"
            },
            {
              "name": "Xiang Xiang",
              "title": "UE Engineer",
              "id": "6",
              "parentId": "4",
              "img_url": "https://example.com/images/employee_6.jpg"
            },
            {
              "name": "Jin Jin",
              "title": "Engineer",
              "id": "7",
              "parentId": "4",
              "img_url": "https://example.com/images/employee_7.jpg"
            }
          ]
        },
        {
          "name": "Hei Hei",
          "title": "Senior Engineer",
          "id": "8",
          "parentId": "2",
          "img_url": "https://example.com/images/employee_8.jpg"
        }
      ]
    },
    {
      "name": "Hong Miao",
      "title": "Department Manager",
      "department": "Department_2",
      "id": "9",
      "parentId": "1",
      "img_url": "https://example.com/images/employee_9.jpg",
      "children": [
        {
          "name": "Chun Li",
          "title": "Senior Engineer",
          "id": "10",
          "parentId": "9",
          "img_url": "https://example.com/images/employee_10.jpg"
        },
        {
          "name": "Mei Ling",
          "title": "Team Lead Manager",
          "department": "Department_2",
          "id": "11",
          "parentId": "9",
          "img_url": "https://example.com/images/employee_11.jpg",
          "children": [
            {
              "name": "Wei Wei",
              "title": "Engineer",
              "id": "12",
              "parentId": "11",
              "img_url": "https://example.com/images/employee_12.jpg"
            },
            {
              "name": "Lan Lan",
              "title": "UE Engineer",
              "id": "13",
              "parentId": "11",
              "img_url": "https://example.com/images/employee_13.jpg"
            },
            {
              "name": "Qi Qi",
              "title": "Engineer",
              "id": "14",
              "parentId": "11",
              "img_url": "https://example.com/images/employee_14.jpg"
            }
          ]
        },
        {
          "name": "Zhen Hua",
          "title": "Senior Engineer",
          "id": "15",
          "parentId": "9",
          "img_url": "https://example.com/images/employee_15.jpg"
        }
      ]
    },
    {
      "name": "Chun Miao",
      "title": "Department Manager",
      "department": "Department_3",
      "id": "16",
      "parentId": "1",
      "img_url": "https://example.com/images/employee_16.jpg",
      "children": [
        {
          "name": "Bao Bao",
          "title": "Senior Engineer",
          "id": "17",
          "parentId": "16",
          "img_url": "https://example.com/images/employee_17.jpg"
        },
        {
          "name": "Lin Lin",
          "title": "Team Lead Manager",
          "department": "Department_3",
          "id": "18",
          "parentId": "16",
          "img_url": "https://example.com/images/employee_18.jpg",
          "children": [
            {
              "name": "Hua Hua",
              "title": "Engineer",
              "id": "19",
              "parentId": "18",
              "img_url": "https://example.com/images/employee_19.jpg"
            },
            {
              "name": "Ming Ming",
              "title": "UE Engineer",
              "id": "20",
              "parentId": "18",
              "img_url": "https://example.com/images/employee_20.jpg"
            },
            {
              "name": "Tao Tao",
              "title": "Engineer",
              "id": "21",
              "parentId": "18",
              "img_url": "https://example.com/images/employee_21.jpg"
            }
          ]
        },
        {
          "name": "Jia Jia",
          "title": "Senior Engineer",
          "id": "22",
          "parentId": "16",
          "img_url": "https://example.com/images/employee_22.jpg"
        }
      ]
    },
    {
      "name": "Wei Zhang",
      "title": "Department Manager",
      "department": "Department_4",
      "id": "23",
      "parentId": "1",
      "img_url": "https://example.com/images/employee_23.jpg",
      "children": [
        {
          "name": "Feng Chen",
          "title": "Senior Engineer",
          "id": "24",
          "parentId": "23",
          "img_url": "https://example.com/images/employee_24.jpg"
        },
        {
          "name": "Xiao Wang",
          "title": "Team Lead Manager",
          "department": "Department_4",
          "id": "25",
          "parentId": "23",
          "img_url": "https://example.com/images/employee_25.jpg",
          "children": [
            {
              "name": "Li Jun",
              "title": "Engineer",
              "id": "26",
              "parentId": "25",
              "img_url": "https://example.com/images/employee_26.jpg"
            },
            {
              "name": "Yan Yan",
              "title": "UE Engineer",
              "id": "27",
              "parentId": "25",
              "img_url": "https://example.com/images/employee_27.jpg"
            },
            {
              "name": "Bo Bo",
              "title": "Engineer",
              "id": "28",
              "parentId": "25",
              "img_url": "https://example.com/images/employee_28.jpg"
            }
          ]
        },
        {
          "name": "Hao Ran",
          "title": "Senior Engineer",
          "id": "29",
          "parentId": "23",
          "img_url": "https://example.com/images/employee_29.jpg"
        }
      ]
    },
    {
      "name": "Jing Liu",
      "title": "Department Manager",
      "department": "Department_5",
      "id": "30",
      "parentId": "1",
      "img_url": "https://example.com/images/employee_30.jpg",
      "children": [
        {
          "name": "Kai Yang",
          "title": "Senior Engineer",
          "id": "31",
          "parentId": "30",
          "img_url": "https://example.com/images/employee_31.jpg"
        },
        {
          "name": "Ning Xu",
          "title": "Team Lead Manager",
          "department": "Department_5",
          "id": "32",
          "parentId": "30",
          "img_url": "https://example.com/images/employee_32.jpg",
          "children": [
            {
              "name": "Rui Rui",
              "title": "Engineer",
              "id": "33",
              "parentId": "32",
              "img_url": "https://example.com/images/employee_33.jpg"
            },
            {
              "name": "Shan Shan",
              "title": "UE Engineer",
              "id": "34",
              "parentId": "32",
              "img_url": "https://example.com/images/employee_34.jpg"
            },
            {
              "name": "Lei Lei",
              "title": "Engineer",
              "id": "35",
              "parentId": "32",
              "img_url": "https://example.com/images/employee_35.jpg"
            }
          ]
        },
        {
          "name": "Zhi Wei",
          "title": "Senior Engineer",
          "id": "36",
          "parentId": "30",
          "img_url": "https://example.com/images/employee_36.jpg"
        }
      ]
    }
  ]
}


    var employees = []


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

    let oc = $('#chart').orgchart({
      'data' : datascource,
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

      let $employeeIndex = employees.findIndex(function (e){
            return Number(e.id)+1 === Number(data.id)
        })

        let $parentIndex = employees.findIndex((e)=>{
            return Number(e.id)+1 === Number(data.parentId)
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


        $divCont.append($name)
        $divCont.append($title)

        return $divCont
      },
      'createNode': function($node, data) {
        let $imageContainer = $("<div>", {
            'class': 'imgContainer',
            'id': `image${data.id}`
        })
          employees.push(data)

        let $image = $("<img>", {
            'class': 'avatar imgContainer',
            'src': window.STATIC_URLS.exampleImage
        })

          $imageContainer.append($image)
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

// screenshot the chart

    $("#export").on('click', ()=>{
      html2canvas($('#chart'), {
        onrendered: function(canvas) {
          let dataURL = canvas.toDataURL('image/png')
          let a  = document.createElement('a');
          a.href = dataURL;
          a.download = 'orgChart.png'
          a.click()
        }
      });
    })

   });

