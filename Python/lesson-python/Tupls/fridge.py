from food import foods , repcipes
MENU_TITLE='plaese choose your food (0 to exit)\n'
SHOPING_LIST_TITLE=("\n your shoping list:")
shoping_list , menu_dict={}, {}



for index , key in enumerate(repcipes):
    menu_dict[str(index +1)]=key


while True:

    print(MENU_TITLE)
    print("_"*len(MENU_TITLE))

    for key , value in menu_dict.items():
        print('{}){}'.format(key , value))

    choose = input(">>")
    if choose == '0':
        break
    elif choose in menu_dict:
        selected_choose = menu_dict[choose]
        print('\nMavad lazem bary  {}:'.format(selected_choose))
        ingredients = repcipes[selected_choose]
        for foodstuuf_name , foodstuuf_amiunt in ingredients.items():
            foodstuuf_name_in_frige=foods.get(foodstuuf_name, 0)
            avalebal = '{}/{}'.format(foodstuuf_name_in_frige , foodstuuf_amiunt)


            if foodstuuf_amiunt<=foodstuuf_name_in_frige:
                print('\n {:15} : {:10} Avalabel'.format(foodstuuf_name , avalebal))
                foods[foodstuuf_name]=foods.get(foodstuuf_name) - foodstuuf_amiunt
            else:
                print('\n {:15} : {:10} NOT Avalabel'.format(foodstuuf_name , avalebal))
                foodstuuf_amount_to_buy=foodstuuf_amiunt - foodstuuf_name_in_frige
                foods[foodstuuf_name]=0

                shoping_list[foodstuuf_name] = shoping_list.setdefault(foodstuuf_name, 0) +foodstuuf_amount_to_buy

print(SHOPING_LIST_TITLE)
print('_' *len(SHOPING_LIST_TITLE))


for name , amount in shoping_list.items():
    print("{:15} : {}".format(name , amount))





